'use strict';

const fs = require('fs');
const getArgs = require('./utility').getArgs;
const toLines = require('./utility').toLines;

const path = getArgs()[0];

fs.readFile(path, 'utf8', (error, file) => {
	if (error) {
		return console.log(error);
	}

	const lines = toLines(file);
	console.log(lines.length - 1);
});
