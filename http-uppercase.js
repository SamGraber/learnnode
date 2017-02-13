'use strict';

const http = require('http');
const map = require('through2-map');
const getArgs = require('./utility').getArgs;

const server = http.createServer((request, response) => {
	request.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(response);
});
server.listen(getArgs()[0]);
