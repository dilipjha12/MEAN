#!/usr/bin/env node

//var debug = require('debug')('passport-mongo');
var app = require('./app');


app.set('port', process.env.PORT || 3000);


app.listen(3000);
console.log('server running');
