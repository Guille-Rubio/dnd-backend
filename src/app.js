require('dotenv').config()
const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require('cors')

const characterRoutes = require('./routes/character.routes')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api/character', characterRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)


module.exports = app