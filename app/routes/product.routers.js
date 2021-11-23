const express = require('express');
const { getProductList, createProduct, getProductById, updateProductById, deleteProductById } = require('../controllers/product.controllers');
const { checkEmpty, checkNumber } = require('../middleware/validations/product.validations');
const productRouter = express.Router();

productRouter.get('/', getProductList);

productRouter.post('/create-product', checkEmpty, checkNumber, createProduct);

productRouter.get('/get-product-detail/:id', getProductById);

productRouter.put('/update-product/:id', checkEmpty, checkNumber, updateProductById);

productRouter.delete('/delete-product/:id', deleteProductById);

module.exports = productRouter;