const express = require('express')
const app = express()

const apiRoutes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', apiRoutes)

app.get('/ping', (req, res) => {
	res.json('ok')
})

const PORT = process.env.NODE_ENV === 'PROD' ? 80:3000  
app.listen(3000, () => console.log('app started'))
