import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

export { app }
