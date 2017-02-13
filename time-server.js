'use strict';

const net = require('net');
const getArgs = require('./utility').getArgs;

const server = net.createServer(socket => socket.end(formatIso(new Date()) + '\n'));
server.listen(getArgs()[0]);

function formatIso(date) {
	const month = pad(date.getMonth() + 1)
	return `${date.getFullYear()}-${month}-${pad(date.getDate())} ${date.getHours()}:${date.getMinutes()}`;
}

function pad(number) {
    return (number < 10) ? '0' + number.toString() : number.toString();
}
