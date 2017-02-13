'use strict';

const fs = require('fs');
const path = require('path');
const filteredLs = require('./filtered-ls-util');
const getArgs = require('./utility').getArgs;

const args = getArgs();
const directory = args[0];
const extension = args[1];

filteredLs(directory, extension, (error, files) => {
	if (error) {
		return console.log(error);
	}

	files.forEach(file => console.log(file));
});
