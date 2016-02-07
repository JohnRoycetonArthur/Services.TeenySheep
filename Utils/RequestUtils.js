
/* Helper module for parsing requests data */

Request = { }

// fetches the appropriate header value from request 
Request.GetHeader = function(req, header) {
	header = null

	header = req.get(header)

	console.log(header)
	return header
}

module.exports = Request;