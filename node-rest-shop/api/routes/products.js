const express = require('express');
const mongoose = require('mongoose');

//Product mongo schema
const Product = require('../models/product');

//Exportable
const router = express.Router();

//functions
const getProduct = require('../functions/getObject')(Product);
const generr = require('../functions/generr');
const postObject = require('../functions/postObject');

//Get from root products path (productId in http request body)
router.get('/', (q, s, n) => {
    const id = q.body.productId;
    getProduct(s,n,id);
});

//Post in root products path (product info in http request body)
router.post('/', (q,s,n) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: q.body.name,
        price: q.body.price
    });
    postObject(s,n,product, "Product Posted!");
});

//Get from /products/:productId
router.get('/:id', (q,s,n) => {
    const id = q.params.id;
    getProduct(s,n,id);
});

module.exports = router;
