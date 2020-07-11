const express = require('express')
const router = express.Router()

const auth = require('../controller/auth')

router.post('/register', auth.register)

module.exports = router