
/* Implementation for getting data for TeamPredictor  -  we use mongodb here */

// Constants and imports
// Mailgun-apikey in environment var : process.env.MAILGUN_APIKEY
// Mailgun-api domain : process.env.MAILGUN_DOMAIN

var api_key = process.env.MAILGUN_APIKEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var dbHost = process.env.OPENSHIFT_MONGODB_DB_HOST;
var dbPort = process.env.OPENSHIFT_MONGODB_DB_PORT;
var dbName = "fusionyouth"
var dbURL = "mongodb://"+dbHost+":"+dbPort+"/"+dbName

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient


TeamPredictorDataService = { }

TeamPredictorDataService.GetSquad = function(res){

  MongoClient.connect(dbURL, function (err, db) {
  	if (err) {
    	console.log('Unable to connect to the mongoDB server. Error:', err);
    	res.json({ Code: 200, Status: 'Connect failure' });
  	} else {
    	//HURRAY!! We are connected. :)
    	console.log('Connection established to', url);

    	// do some work here with the database.
    	var squad = db.collection('Squad');

    	res.json({ Code: 200, Status: 'Data from GetSquad', data: squad });

    	//Close connection
    	db.close();
  	}
  });

}

TeamPredictorDataService.GetSchedule = function(){
	
}

TeamPredictorDataService.GetFormations = function(){
	
}


module.exports = TeamPredictorDataService;