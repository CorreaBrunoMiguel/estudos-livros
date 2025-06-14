import mongoose, { mongo } from 'mongoose'

import config from './../config/config.js'
import app from './express'

mongoose.Promise = global.Promise
console.log(config.mongoUri)
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', (err) => {
  console.error('Erro ao conectar a MongoDB:', err)
  throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info(`Server started on port ${config.port}`)
})
