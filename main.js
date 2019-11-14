const reader = require('readline-sync');
const {findPrimes, print} = require('./utils');

const num1 = reader.questionInt("Please insert a positive number = ");
const num2 = reader.questionInt("Please insert a positive number = ");

if(findPrimes(num1, num2)){
  print(findPrimes(num1,num2));
}else{
  console.log("numbers should be positive");
}
