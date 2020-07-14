const express = require('express')
const app = express()
const cors = require('cors')
const serverless = require('serverless-http');

const apiRoutes = require('./routes/index')
const middlewares = require('./middlewares/index')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api', middlewares.checkApiKey, apiRoutes)

app.get('/ping', (req, res) => {
	res.json('ok')
})

const PORT = process.env.NODE_ENV === 'PROD' ? 80:7000  
app.listen(PORT, () => console.log('app started'))

module.exports.handler = serverless(app)
