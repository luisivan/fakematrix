#!/usr/bin/env node

var spawn = require('child_process').spawn,
	command = 'play'

if (require('os').platform() == 'darwin')
	command = 'afplay'

setInterval(function () {
	spawn(command, ['sound.mp3'])
}, 100)

