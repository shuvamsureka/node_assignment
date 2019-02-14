const calci = require('./calculator');

const result = calci.calc(process.argv[2], parseInt(process.argv[3]), parseInt(process.argv[4]));

console.log(result);