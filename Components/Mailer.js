
/* Implementation of mail api  -  we use mailgun here */

// Constants and imports
// Mailgun-apikey in environment var : process.env.MAILGUN_APIKEY
// Mailgun-api domain : process.env.MAILGUN_DOMAIN

var api_key = process.env.MAILGUN_APIKEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var Mailer = { }

// fires out a mail using mail gun api
// @param - data object containing email data
Mailer.send = function(data){

  	  mailgun.messages().send(data, function (error, body) {
  		// console.log(body);
	  });

}

module.exports = Mailer;