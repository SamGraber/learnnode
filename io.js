'use strict';

const fs = require('fs');
const getArgs = require('./utility').getArgs;
const toLines = require('./utility').toLines;

const path = getArgs()[0];

const file = fs.readFileSync(path, 'utf8');

const lines = toLines(file);

console.log(lines.length - 1);
