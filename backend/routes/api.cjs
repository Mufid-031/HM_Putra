/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductByName,
} = require('../controllers/product.cjs')

const { getProductPrice } = require('../controllers/print.cjs')

router.get('/products', getProducts)
router.post('/products', createProduct)
router.get('/products/:id', getProductById)
router.delete('/products/:id', deleteProduct)
router.put('/products/:id', updateProduct)
router.get('/product', getProductByName)
router.get('/print', getProductPrice)

module.exports = router
