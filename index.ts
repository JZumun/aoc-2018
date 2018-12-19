import readInput from "./utils/input-reader";
import Solver from "./utils/solver";

const puzzle = process.argv[2];
const inputFile = process.argv[3] || `${puzzle}/input.txt`;

const input = readInput(inputFile);


import(`./${puzzle}`)
	.then(({default: solver}) => (solver as Solver)(input))
	.then(console.log, console.error);