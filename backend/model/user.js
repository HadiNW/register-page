const db = require('../config/database')

exports.create = (user) => {
	return db('users').insert(user)
}

exports.find = (params) => {
	return db.select().from('users').where(params)
}
