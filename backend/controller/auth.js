const user = require('../model/user')

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
	
		if (!email || !first_name || !last_name || !mobile_number) {
			return res.status(400).json({
				status: 400,
				message: 'unprocessable entity'
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
			data: newUser
		})
	}
	catch(e) {
		res.status(400).json({
			status: 400,
			message: 'cannot register',
			err: e
		})
	}
}

exports.login = (req, res) => {}
