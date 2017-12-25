/* <------------------------------------------------------------------> */

//setup for connection database
var express = require('express');
//node modules to request
var pg = require('pg');
var app = express();

//you have to pick the database to connect to;
var dbUrl = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'animal_app',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

var path = require('path');

var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/animals', function(req,res) {
	pgClient.query("SELECT * FROM animals", (err, queryRes) => {
			if(err){
				res.json({error: err})
			} else {
				res.json({animals: queryRes.rows})
			}
		// console.log(res.rows)
		// res.json(res.rows);
	})
})

router.get('/api/reptilia', function(req,res) {
	pgClient.query("SELECT * FROM animals WHERE class='Reptilia'", (err, queryRes) => {
			if(err){
				res.json({error: err})
			} else {
				res.json({reptilia: queryRes.rows})
			}
		// console.log(res.rows)
		// res.json(res.rows);
	})
})

router.get('api/amphibia', (req,res) => {
	pgClient.query("SELECT * FROM animals WHERE class='Amphibia'", (err, queryRes) => {
			if(err){
				res.json({error: err})
			} else {
				res.json({amphibia: queryRes.rows})
			}
		console.log(queryRes.rows)
		// res.json(res.rows);
	})
})

router.get('/api/reptilia', (req,res) => {
	pgClient.query("SELECT * FROM arachnida WHERE class='Arachnida'", (err, queryRes)=> {
			if(err){
				res.json({error: err})
			} else {
				res.json({arachnida: queryRes.rows})
			}
		// console.log(res.rows)
		// res.json(res.rows);
	})
})

module.exports = router;
