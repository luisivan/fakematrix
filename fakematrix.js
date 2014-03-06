#!/usr/bin/env node

var colors = require('colors'),
	art = require('ascii-art')

var defaultTime = 10 //Number of seconds the script will run if no input is provided

var installDir = process.config.variables['node_prefix']+'/lib/node_modules/fakematrix'
process.chdir(installDir)

var sound = require('child_process').spawn('./sound.js')

var args = process.argv.splice(2),
	timeout = (parseInt(args[0]) || defaultTime)*1000,
	text = args[1]

var start = Date.now()

while (start+timeout>Date.now()) {
	var abc = ['ч','а','щ','а','х','ю','г','а','ж','и','л', 'б','ы','ц','и','т','р','у','с','Д','а','н','о','ф','а','л','ь','ш','и','в','ы','й','э','к','з','е','м','п','л','я','р'],
		string = '',
		spaces = 0
	for (var j=0; j<process.stdout.columns-1; j++) {
		if (j+spaces>process.stdout.columns-1)
			break
		string += abc[parseInt(Math.random()*abc.length)][((Math.random() < 0.03) ? 'white' : 'green')]
		if (Math.random() < 0.1 && spaces++)
			string += '  '
	}

	process.stdout.write(string)
}

art.font(text, 'Basic', 'green', function(rendered) {
	sound.kill('SIGHUP')
	process.stdout.write('\n\n\n\n'+rendered+'\n\n')
})