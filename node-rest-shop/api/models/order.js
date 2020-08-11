const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: String,
    quantity: Number
});

module.exports = mongoose.model('Order', schema);
