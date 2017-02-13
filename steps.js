'use strict';

const getArgs = require('./utility').getArgs;

let total = 0;
getArgs().forEach(num => {
	total = total + Number(num);
});
console.log(total);
