const db = require('../config/database')

exports.create = (user) => {
	return db('users').insert(user)
}
