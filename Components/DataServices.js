
/* Implementation for getting data for TeamPredictor  -  we use mongodb here */

// Constants and imports
// Mailgun-apikey in environment var : process.env.MAILGUN_APIKEY
// Mailgun-api domain : process.env.MAILGUN_DOMAIN

var dbHost = process.env.OPENSHIFT_MONGODB_DB_HOST;
var dbPort = process.env.OPENSHIFT_MONGODB_DB_PORT;
var dbName = "fusionyouth"
var dbURL = "mongodb://"+dbHost+":"+dbPort+"/"+dbName

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient


TeamPredictorDataService = { }

TeamPredictorDataService.GetSquad = function(req, res){

    var squad = db.get('Squad')
    res.json({ Code: 200, Status: 'Data from GetSquad', data: squad });

}

TeamPredictorDataService.GetSchedule = function(){
	
}

TeamPredictorDataService.GetFormations = function(){
	
}


module.exports = TeamPredictorDataService;