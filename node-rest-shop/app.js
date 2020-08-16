const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Exportable
const app = express();

//Morgan
app.use(morgan('dev'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Mongoose
mongoose.connect(
    'mongodb+srv://samtell:'
        + process.env.MONGO_ATLAS_PW
        +'@practice.t637f.mongodb.net/node-rest-shop-api?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

//Routers
const hannahRouter = require('./api/routes/hannah');
const dadRouter = require('./api/routes/dad');
const productsRouter = require('./api/routes/products');
const orderRouter = require('./api/routes/orders');
const rootRouter = require('./rootRouter');


//CORS & Headers
app.use((q,s,n) => {
    s.header('Access-Control-Allow-Origin', '*');
    s.header('Access-Control-Allow-Headers', '*');
    if (q.method === 'OPTIONS') {
        s.header('Access-Control-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return s.status(200).json({});
    }
    return n();
});

//Routes
app.use('/hannah', hannahRouter);
app.use('/dad', dadRouter);
app.use('/products', productsRouter);
app.use('/orders', orderRouter);
app.use('/', rootRouter);

//Throw error for bad paths
app.use((req, res, next) => {
    next(require('./api/functions/generr')(
        "theres nothing here",
        404
    ));
});

//Catch all errors
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            status: error.status,
            message: error.message
        }
    });
});

//Export the app
module.exports = app;
