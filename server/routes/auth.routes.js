const express = require('express')

const router = express.Router()

router.post('/register', (req, res) => {
  res.status(201).json({
    message: 'Registration endpoint is working',
  })
})

module.exports = router