/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api.cjs')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

const url = 'mongodb://127.0.0.1:27017'
const dbName = 'hm_putra'

mongoose.connect(`${url}/${dbName}`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log(`MongoDB connected`)
})

app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, '../dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
