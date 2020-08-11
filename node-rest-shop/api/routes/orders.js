const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');

const postObject = require('../functions/postObject');
const getOrder = require('../functions/getObject')(Order);

router.post('/', (q,s,n) => {
    const order = new Order({
        _id:  new mongoose.Types.ObjectId,
        productId:  q.body.productId,
        quantity: q.body.quantity
    });
    postObject(s,n,order,"Order Posted!");
});

router.get('/:orderId', (q,s,n) => {
    const id = q.params.orderId;
    getOrder(s,n,id);
});

module.exports = router;
