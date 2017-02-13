'use strict';

const fs = require('fs');
const path = require('path');
const getArgs = require('./utility').getArgs;

const args = getArgs();
const directory = args[0];
const extension = args[1];

fs.readdir(directory, (error, files) => {
	if (error) {
		return console.log(error);
	}

	files.filter(file => path.extname(file) == `.${extension}`)
		 .forEach(file => console.log(file));
})