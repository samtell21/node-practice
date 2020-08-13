const express = require('express');

const router = express.Router();

router.get('/', (q,s,n) => {
    s.status(200).json("Hi Christine!");
});

router.get('/teapot', (q,s,n) => {
    n(require('./api/functions/generr')(
        "Hey, I'm actually just a teapot, not a server...",
        418
    ));
});


module.exports = router;
