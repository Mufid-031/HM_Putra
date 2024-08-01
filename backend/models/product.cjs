/* eslint-disable no-undef */
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    nameProduct: String,
    categoryProduct: String,
    priceProduct: Number,
    categorypriceProduct: Number
})

module.exports = {
    Product: mongoose.model('product', productSchema),
}