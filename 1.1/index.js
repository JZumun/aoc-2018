const readInput = require("../utils/input-reader");

module.exports = input => input.map(l => Number.parseInt(l)).reduce((a,b)=>a+b,0)