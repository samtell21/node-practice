const express = require('express');
const router = express.Router();

router.get('/', (rq,rs,nxt) => {
    rs.status(200).json("cool food drive!");
});

router.get('/secret', (q,s,n) => {
    s.status(200).json("this is a secret website, you're actually not supposed to be here...");
});

module.exports = router;
