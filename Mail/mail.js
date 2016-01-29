var express = require('express');
var router = express.Router();

// middleware that is specific to this router

// define the home page route
router.get('/', function(req, res) {
  res.send('Mail link is working');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About mail api');
});

module.exports = router;