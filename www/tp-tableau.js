
/*
let array=[];

for (let words = 0; words < 3; words++) {
	array.push(prompt('give me a word please'));

}
for (let valwords of array){
	console.log (valwords);
	console.log(array.length);
}
*/

/*  exo 2 correct
let array = [];
let start = true;

while (start === true) {
	let result = prompt('What do you want to do ?');
	if (result === 'start') {
		for (let words = 0; words < 3; words++) {
			array.push(prompt('give me a word please'));

		}


	}
	if (result === 'show') {
		for (let valwords of array) {
			console.log(valwords);
		
		}


	}
	if (result === 'length') {
		console.log(array.length);

	}
	if (result === 'reset') {
		array = [];

	}
	if (result === 'stop') {
		break;

	}

	else {
		console.log('unknown command');

	}

}
*/

let array = [];
let start = true;

function start() {
	for (let words = 0; words < 3; words++) {
		array.push(prompt('give me a word please'));
	}
  
}

function show() {
	for (let valwords of array) {
		console.log(valwords);
	
	}
}

function length() {
	console.log(array.length);
}

function reset() {
	array = [];
}

while (start === true) {
	let result = prompt('What do you want to do ?');
	if (result === 'start') {
		start();

	}
	if (result === 'show') {
		show();
	}
	if (result === 'length') {
		length();

	}
	if (result === 'reset') {
		reset();

	}
	if (result === 'stop') {
		break;

	}

	else {
		console.log('unknown command');

	}

}


