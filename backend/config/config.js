const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	DB_CLIENT: process.env.DB_CLIENT,
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	API_KEY: process.env.API_KEY
}
