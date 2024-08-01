/* eslint-disable no-undef */
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/hm_putra')

const getProducts = async (req, res) => {
  const db = mongoose.connection

  try {
    const product = await db.collection('product').find().toArray()
    res.status(200).json(product)
    console.log(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

const createProduct = async (req, res) => {
  const db = mongoose.connection

  try {
    const response = await db.collection('product').insertOne(
      {
        nameProduct: req.body.nameProduct,
        categoryProduct: req.body.categoryProduct,
        priceProduct: parseInt(req.body.priceProduct),
        categorypriceProduct: req.body.categorypriceProduct
      },
      (err, res) => {
        if (err) throw err

        console.log(res)
      }
    )

    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

const getProductById = async (req, res) => {
  try {
    await res.status(200).json({
      message: 'success get product by id'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

const deleteProduct = async (req, res) => {
  const db = mongoose.connection

  try {
    const response = await db.collection('product').deleteOne({
      _id: new mongoose.Types.ObjectId(req.params.id)
    })

    console.log(response)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

const updateProduct = async (req, res) => {
  const db = mongoose.connection

  try {
    const response = await db.collection('product').updateMany(
      {
        _id: new mongoose.Types.ObjectId(req.params.id)
      },
      {
        $set: {
          nameProduct: req.body.nameProduct,
          categoryProduct: req.body.categoryProduct,
          priceProduct: req.body.priceProduct,
          categorypriceProduct: req.body.categorypriceProduct
        }
      }
    )

    console.log(response)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

const getProductByName = async (req, res) => {
  const db = mongoose.connection

  const regexForName = new RegExp(req.query.nameProduct, 'i')
  try {
    const response = await db
      .collection('product')
      .find({
        nameProduct: {
          $regex: regexForName
        }
      })
      .toArray()

    console.log(response)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}



module.exports = {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductByName,
}
