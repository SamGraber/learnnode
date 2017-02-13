'use strict';

const newline = '\n';

exports.getArgs = function() {
	return process.argv.splice(2);
}

exports.toLines = function (str) {
	return str.split(newline);
}
