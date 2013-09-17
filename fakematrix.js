#!/usr/bin/env node

var exec = require('sys').exec,
	colors = require('colors'),
	art = require('ascii-art');

var defaultTime = 10; //Number of seconds the script will run if no input is provided

var args = process.argv.splice(2),
	timeout = (parseInt(args[0]) || defaultTime)*1000,
	text = args[1];

var stop = false;

var start = Date.now();

while (start+timeout>Date.now()) {
	var abc = ['ч','а','щ','а','х','ю','г','а','ж','и','л', 'б','ы','ц','и','т','р','у','с','Д','а','н','о','ф','а','л','ь','ш','и','в','ы','й','э','к','з','е','м','п','л','я','р'];
	var string = '';
	var spaces = 0;
	for (var j=0; j<process.stdout.columns-1; j++) {
		if (j+spaces>process.stdout.columns-1)
			break;
		if (Math.random() < 0.03)
			string += abc[parseInt(Math.random()*abc.length)].white;
		else
			string += abc[parseInt(Math.random()*abc.length)].green;
		if (Math.random() < 0.1) {
			string += '  ';
			spaces++;
		}
	}

	process.stdout.write(string);
	//exec('aplay /usr/share/sounds/speech-dispatcher/test.wav');
}

art.font(text, 'Basic', 'green', function(rendered){
	process.stdout.write('\n\n\n\n');
	process.stdout.write(rendered);
	process.stdout.write('\n\n');
});
