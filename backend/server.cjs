/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api.cjs')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

// const MongoUri = process.env.MONGO_URI
const MongoUri = 'mongodb://127.0.0.1:27017/hm_putra'
const connectDB = async () => {
  try {
    await mongoose.connect(MongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error('MongoDB connection error:', err))
    
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}

app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, '../dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = connectDB
