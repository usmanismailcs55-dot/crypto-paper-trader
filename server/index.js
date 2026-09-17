require('dotenv').config()

const connectDB = require('./src/config/db')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const User = require('./models/User')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/userRoutes')

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// 🌐 CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())
app.use(cookieParser())

// 🔐 Authentication routes
app.use('/api/auth', authRoutes)

// 👤 Authenticated user routes
app.use('/api/users', userRoutes)

// 🩺 Backend health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is running' })
})

// 🍃 MongoDB connection test
app.get('/api/db-test', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    return res.json({ message: 'MongoDB is connected' })
  }

  res.status(500).json({ message: 'MongoDB is not connected' })
})

// 👤 Test User database operation
app.get('/api/user-test', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'test123',
    })

    res.json({
      message: 'User created successfully',
      user,
    })
  } catch (error) {
    res.status(500).json({
      message: 'User creation failed',
      error: error.message,
    })
  }
})

// 🔍 Test reading a User from MongoDB
app.get('/api/user-read-test', async (req, res) => {
  try {
    const user = await User.findOne({
      email: 'test@example.com',
    })

    res.json({
      message: 'User found successfully',
      user,
    })
  } catch (error) {
    res.status(500).json({
      message: 'User lookup failed',
      error: error.message,
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})