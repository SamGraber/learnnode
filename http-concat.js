'use strict';

const http = require('http');
const getArgs = require('./utility').getArgs;

const url = getArgs()[0];

http.get(url, (response) => {
	response.setEncoding('utf8');

	let buffer = '';

	response.on('error', error => {
		return console.log(error);
	});
	
	response.on('data', data => {
		buffer += data;
	});
	
	response.on('end', () => {
		console.log(buffer.length);
		console.log(buffer);
	});
});
