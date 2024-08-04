/* eslint-disable no-undef */
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    nameProduct: String,
    categoryProduct: String,
    priceProduct: Number,
    categorypriceProduct: Number
})

const Product = mongoose.model('product', productSchema)

module.exports = Product