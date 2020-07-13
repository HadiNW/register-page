const config = require('../config/config')
exports.checkApiKey = (req, res, next) => {
	if (req.headers.api_key !== config.API_KEY) {
		return res
			.status(403)
			.json({
				status: 403,
				message: 'forbidden',
				errors: { message: 'api key is missing' },
			})
	}

	next()
}
