const knex = require('knex')

const db = knex({
	client: 'mysql',
	connection: {
	  host : 'database-1.cfr1rmaz7k7f.ap-southeast-1.rds.amazonaws.com',
	  user : 'admin',
	  password : 'adminmyDB',
	  database : 'db_dev'
	}
})

exports.create = (user) => {
	return db('users').insert(user)
}