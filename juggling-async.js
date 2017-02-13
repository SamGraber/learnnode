'use strict';

const http = require('http');
const getArgs = require('./utility').getArgs;

const urls = getArgs();

let first;
let second;
let third;

getData(urls[0], data => {
	first = data;
	checkFinish();
});

getData(urls[1], data => {
	second = data;
	checkFinish();
});

getData(urls[2], data => {
	third = data;
	checkFinish();
});

function checkFinish() {
	if (first && second && third) {
		console.log(first);
		console.log(second);
		console.log(third);
	}
}

function getData(url, callback) {
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
			callback(buffer);
		});
	});
}
