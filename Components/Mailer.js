
/* Implementation of mail api  -  we use mailgun here */

// Constants and imports
var api_key = 'key-2bfec95b08f94a91816e9425596a2f2a';
var domain = 'mg.teenysheep.com';
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