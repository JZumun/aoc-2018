const path = require("path");
const readInput = require("./utils/input-reader");

const puzzle = process.argv[2];
const inputFile = process.argv[3] || `${puzzle}/input.txt`;

const solver = require( `./${puzzle}` );
const input = readInput(inputFile);


Promise.resolve(solver(input))
	.then(console.log, console.error);