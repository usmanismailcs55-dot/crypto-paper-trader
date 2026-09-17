const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  console.log('🔐 Auth middleware running')

  // 🍪 Get token from cookie
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required',
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded

    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    })
  }
}

module.exports = authMiddleware