const {addNumbers} = require('./services/addNumbers');
const {concatStrings} = require('./services/concatStrings');

const total = addNumbers([10,20]);
console.log('TOTAL VALUE =>', total);