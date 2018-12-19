const fs = require("fs");

export default (file:string = process.argv[2]) : string[] => fs.readFileSync(file, 'utf8').trim().split(/\n/g);