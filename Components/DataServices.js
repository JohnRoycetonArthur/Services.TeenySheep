
/* Implementation for getting data for TeamPredictor  -  we use mongodb here */

// Constants and imports
// Mailgun-apikey in environment var : process.env.MAILGUN_APIKEY
// Mailgun-api domain : process.env.MAILGUN_DOMAIN

var dbHost = process.env.OPENSHIFT_MONGODB_DB_HOST || "";
var dbPort = process.env.OPENSHIFT_MONGODB_DB_PORT || "";
var dbName = "fusionyouth"
var dbURL = "mongodb://"+dbHost+":"+dbPort+"/"+dbName

var connection_string = "mongodb://"+ process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

TeamPredictorDataService = { }

// Connect to the db
MongoClient.connect(connection_string, function(err, db) {
  if(!err) {
    console.log("We are connected");
    TeamPredictorDataService.db = db
  } else{
     console.log("error ! in db connection")
  }

});

TeamPredictorDataService.GetSquad = function(req, res){

    // var squad = req.db.get('Squad')
    var collection = TeamPredictorDataService.db.collection('Squad');
    res.json({ Code: 200, Status: 'Data from GetSquad', data: collection });

}

TeamPredictorDataService.GetSchedule = function(){
	
}

TeamPredictorDataService.GetFormations = function(){
	
}


module.exports = TeamPredictorDataService;