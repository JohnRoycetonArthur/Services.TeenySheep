/* /Mail routes handler */

// import dependencies
var express = require('express');
var router = express.Router();
var appRegistry = require('../Components/AppRegistry')
var mailer = require('../Components/Mailer')

// Middleware - does /mail routes data validation
router.use(function(req, res, next){

	// validate request to see if the app is registered
	console.log('data validated')
	// base mail data param validation
	next()
});


// Sample route to see if mailer is function or not
router.get('/', function(req, res) {
  res.send('Mail link is working');
});


// Sends mail - request handler
router.post('/', function(req, res) {
	// get data from request
	status = appRegistry.CheckifKeyExist("testapp-123")
	// use mailer component to send mail
	if status {
		
		var data = {
  			from: 'Excited User <mark.arthur@digiflare.com>',
  			to: 'tufjef@gmail.com',
  			subject: 'Hello',
  			text: 'Testing some Mailgun awesomness!'
  		};  

		mailer.send(data)
		// send success
		res.send('Test mail has been sent')
	} else {
		// send error
		res.send('Unable to send mail')
	}
	
});



module.exports = router;
 
