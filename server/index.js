import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/auth.js'

dotenv.config()

connectDB()

const port = process.env.PORT || 8081
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`Server worked!`)
})