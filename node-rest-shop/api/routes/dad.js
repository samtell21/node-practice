const express = require('express');
const router = express.Router();

router.get('/', (q,s,n) => {
    s.status(200).json("check it out, I made a website");
});

module.exports = router;
