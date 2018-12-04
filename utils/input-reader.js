const fs = require("fs");

module.exports = (file=process.argv[2]) => fs.readFileSync(file, 'utf8').trim().split(/\n/g);