/* Details regarding client app registrations */


// Registry List

Registry = {
	"1" : { "name": "FusionYouth", "key" : "fusionyouth-123" },
	"2" : { "name": "TestApp", "key" : "testapp-123" }
}

var AppRegistry = { }

// Check's if the given key exist in the registry
// @param : string - app key
// @param : string - app id
// @return : boolean - true if exists else returns false
AppRegistry.CheckifKeyExist = function(key) {
	
	status = false

	for (var appId in Registry) {
		if (Registry.hasOwnProperty(appId)) {

			if (Registry[appId].key == key) {
				status = true 
				return status
			}
  		}
	}

	return status

}

module.exports = AppRegistry;