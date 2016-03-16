/* /Mail routes handler */

// import dependencies
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
var appRegistry = require('../Components/AppRegistry')
var reqHelpers = require('../Utils/RequestUtils')
var dataServices = require('../Components/DataServices')

var userName = process.env.OPENSHIFT_MONGODB_DB_USERNAME
var password = process.env.OPENSHIFT_MONGODB_DB_PASSWORD
var dbHost = process.env.OPENSHIFT_MONGODB_DB_HOST;
var dbPort = process.env.OPENSHIFT_MONGODB_DB_PORT;
var dbName = "fusionyouth"

var connection_string = "mongodb://"+ userName + ":" + password + "@" + dbHost + ':' + dbPort + '/' + dbName;
var db = require('monk')(connection_string)

// Parse requests with application/json
router.use(bodyParser.json())
router.use(bodyParser.raw())
router.use(bodyParser.urlencoded({ extended: true }))

// Middleware - does /mail routes data validation
router.use(function(req, res, next){

	// validate request to see if the app is registered
	appKey = req.get('x-app-key')
	req.db = db

	if (appKey !== undefined) {
		status = appRegistry.CheckifKeyExist(appKey)
		if (status) {
			next()
		} else {
			// res.send('Sorry, your app is not registered with teenysheep')
			res.json({ Code: 200, Status: 'Sorry, your app is not registered with teenysheep' })
		}
	} else {
		// res.send('Sorry, your app is not registered with teenysheep')
		res.json({ Code: 200, Status: 'Sorry, your app is not registered with teenysheep' })
	}

});


// Sample route to see if mailer is function or not
router.get('/', function(req, res) {
  res.json({ Code: 200, Status: 'Product1 Api is up and running', con: connection_string});
});


// API : GetSquad

/* Returns the current squad information from DB */
router.get('/GetSquad', function(req, res) {

	dataServices.GetSquad(req, res)

});

// API : GetSchedule

/* Returns the current schedule information from DB */
router.get('/GetSchedule', function(req, res) {

	dataServices.GetSchedule(req, res)

});

// API : GetFormations

/* Returns the formations information from DB */
router.get('/GetFormations', function(req, res) {

	dataServices.GetFormations(req, res)

});


module.exports = router;
 
