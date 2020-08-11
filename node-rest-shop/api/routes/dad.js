const express = require('express');
const router = express.Router();

router.get('/', (q,s,n) => {
    s.status(200).json("check it out, I made a website");
});


router.delete('/', (q,s,n) => {
    s.status(200).json({
        amessage: "you've been deleted",
        array: [
            "how do you feel?",
            "a little cold?",
            "a little afraid?"
        ]
    });
});

module.exports = router;
