require('dotenv').config()
const connectDB = require('./src/config/db')
const express = require('express')
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})