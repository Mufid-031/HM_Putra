/* eslint-disable no-undef */
// const mongoose = require('mongoose')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// mongoose.connect('mongodb://127.0.0.1:27017/hm_putra')

const getProductPrice = async (req, res) => {
  // const db = mongoose.connection

  try {
    const response = await prisma.product
      .findMany({
        where: {
          nameProduct: req.query.nameProduct,
          categoryProduct: req.query.categoryProduct
        },  
      })

    console.log(response)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

module.exports = {
  getProductPrice
}
