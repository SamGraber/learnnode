'use strict';

const http = require('http');
const fs = require('fs');
const getArgs = require('./utility').getArgs;

const args = getArgs();
const server = http.createServer((request, response) => {
	const fileStream = fs.createReadStream(args[1]);
	fileStream.pipe(response);
});
server.listen(args[0]);
