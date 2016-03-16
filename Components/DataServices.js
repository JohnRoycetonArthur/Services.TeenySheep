
/* Implementation for getting data for TeamPredictor  -  we use mongodb here */

// Constants and imports

TeamPredictorDataService = { }

/* Returns Squad Api info */
TeamPredictorDataService.GetSquad = function(req, res){

    squad = req.db.get('Squad')
    squad.find({ }, function (err, docs){
        res.json({ Code: 200, Status: 'Success', data: docs});
    });

}

// return Schedule data api
TeamPredictorDataService.GetSchedule = function(req, res){

    schedule = req.db.get('Schedule')
    schedule.find({ }, function (err, docs){
        res.json({ Code: 200, Status: 'Success', data: docs});
    });

}

// return formations data api
TeamPredictorDataService.GetFormations = function(req, res){
	 
    formations = req.db.get('Formations')
    formations.find({ }, function (err, docs){
        res.json({ Code: 200, Status: 'Success', data: docs});
    });

}

module.exports = TeamPredictorDataService;