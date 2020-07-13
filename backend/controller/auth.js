const user = require('../model/user')
const { checkReqBody } = require('../utils/util')

exports.register = async (req, res) => {
	try {
		const {
			email,
			first_name,
			last_name,
			mobile_number,
			birthdate,
			gender,
		} = req.body
		const required = ['email', 'first_name', 'last_name', 'mobile_number']
		const missingField = checkReqBody(req.body, required)

		if (missingField) {
			return res.status(422).json({
				status: 422,
				message: 'unprocessable entity',
				errors: {
					message: missingField+' is required',
				},
			})
		}

		const emailExists = await user.find({email})
		if(emailExists.length) {
			return res.status(400).json({
				status: 400,
				message: 'cannot register',
				errors: {
					message: 'email already exists',
				},
			})
		}
		const mobileExists = await user.find({mobile_number})
		if(mobileExists.length) {
			return res.status(400).json({
				status: 400,
				message: 'cannot register',
				errors: {
					message: 'mobile number already exists',
				},
			})
		}

		const newUser = {
			email,
			first_name,
			last_name,
			mobile_number,
			birthdate,
			gender,
		}

		await user.create(newUser)
		return res.status(201).json({
			status: 201,
			message: 'registration success',
			data: newUser,
		})
	} catch (e) {
		if (e.errno) {
			return res.status(400).json({
				status: 400,
				message: 'cannot register',
				errors: {
					code: e.code,
					err_code: e.errno,
					message: e.sqlMessage,
				},
			})
		}
		res.status(500).json({
			status: 500,
			message: 'cannot register',
			errors: e,
		})
	}
}

exports.login = (req, res) => {}
