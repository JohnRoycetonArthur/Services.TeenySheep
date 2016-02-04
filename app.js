// Copyright 2015, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');

var app = express();
var mail = require('./Mail/mail');

var APP_PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080
var APP_IP = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"

// [START hello_world]
// Say hello!
app.get('/', function(req, res) {
  res.status(200).send('Hello, world! My first deployment' );
});
// [END hello_world]

app.use("/mail", mail) 


// [START server]
// Start the server
var server = app.listen(APP_PORT, APP_IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
// [END server]
