/* /Mail routes handler */

// import dependencies
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
var appRegistry = require('../Components/AppRegistry')
var mailer = require('../Components/Mailer')
var reqHelpers = require('../Utils/RequestUtils')

// Parse requests with application/json
router.use(bodyParser.json())
router.use(bodyParser.raw())
router.use(bodyParser.urlencoded({ extended: true }))

// Middleware - does /mail routes data validation
router.use(function(req, res, next){

	// validate request to see if the app is registered
	appKey = req.get('x-app-key')

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
  res.json({ Code: 200, Status: 'Mail Link is working' });
});


// Sends mail - request handler
router.post('/', function(req, res) {
	
	// TODO : Do data validations to check if the sent data is sanitized !
	if (req.body !== undefined) {

		// Step 1 : Check if to and from addresses are present
		if (req.body.from !== undefined && req.body.to !== undefined){
			var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			if (!emailRegex.test(req.body.from) && !emailRegex.test(req.body.to)){
				res.json({ Code: 200, Status: 'Sorry ! The to and / or from parameters are not valid' })
			}
		}

		if (req.body.subject == undefined && ((req.body.text == undefined) || (req.body.html == undefined)) {
			res.json({ Code: 200, Status: 'Sorry ! The subject or text or html parameters need to be specified' })
		}

	}

	// Step 2 : Check if Subject and / or text or html is present


	contentType = req.get('content-type')

	console.log(contentType)

	if (contentType == 'application/x-www-form-urlencoded') {
		// get data from request
		var data = {
			from: req.body.from,
			to: req.body.to,
			subject: req.body.subject,
			text: req.body.text,
			html: req.body.html
		}

		mailer.send(data)

		res.json({ Code: 200, Status: 'Mail has been sent. Thanks for using Teenysheep services.' })
	} else {
		res.json({ Code: 200, Status: 'Sorry, the content-type should be application/x-www-form-urlencoded' })
	}

	
});



module.exports = router;
 
