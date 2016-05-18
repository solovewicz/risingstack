// app/index.js
//const calc = require('./calc');
//const readline = require('readline');


/*
const numbersToAdd = [  
  3,
  4,
  10,
  2
]
*/
/*
var numbersToAdd = []; 

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question('')


const result = calc.sum(numbersToAdd)  
console.log(`The result is: ${result}`)  
*/

/*
const calc = require('./calc');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);




	var i = 0;
	while (i < 2)
  {
  	rl.setPrompt('Please Enter Your 1st Number> ');
	rl.prompt();

	rl.on('line', (line) => {

  	console.log(i + ' = ' + line.trim());


	});
	i++
}
*/

const calc = require('./calc');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

var numbersToAdd = []; 


rl.question('Please enter your first number to add: ', (answer) => {
  	// TODO: Log the answer in a database
  	console.log('Your first number to add is:', answer);
  	numbersToAdd.push(Number(answer));
 	rl.question('Please enter your first number to add: ', (answer) => {
 		// TODO: Log the answer in a database
  		console.log('Your second number to add is:', answer);
  		numbersToAdd.push(Number(answer));

  		const result = calc.sum(numbersToAdd)  
		console.log(`The result is: ${result}`)  

  		rl.close();
	});

});







