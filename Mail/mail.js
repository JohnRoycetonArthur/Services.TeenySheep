var express = require('express');
var router = express.Router();

var api_key = 'key-2bfec95b08f94a91816e9425596a2f2a';
var domain = 'mg.teenysheep.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

// middleware that is specific to this router

// define the home page route
router.get('/', function(req, res) {

  var data = {
  from: 'Excited User <mark.arthur@digiflare.com>',
  to: 'tufjef@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};  

  mailgun.messages().send(data, function (error, body) {
  console.log(body);
});

  res.send('Mail link is working');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About mail api');
});

module.exports = router;
 
