const reader = require('readline-sync');
const util = require('./utils');

const num = reader.questionInt("Please insert a number = ");

console.log(util.isPrime(19));