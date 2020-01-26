const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const viewRouter = require('./routes/viewRoute');

// Proxy Workaround
const globalAgent = require('global-agent');
globalAgent.bootstrap();

// Init body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Point express to public
app.use(express.static('public'));

// Home Route
app.use('/', viewRouter);

module.exports = app;
