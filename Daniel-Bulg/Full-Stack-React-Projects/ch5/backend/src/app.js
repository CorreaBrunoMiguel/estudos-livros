import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { postsRoutes } from './routes/posts.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
postsRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
