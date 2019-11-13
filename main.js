const reader = require('readline-sync');
const {isPrime, print} = require('./utils');

const num1 = reader.questionInt("Please insert a positive number = ");
const num2 = reader.questionInt("Please insert a positive number = ");

function primesFromRange(num1, num2) {
  if(num1 > 0 && num2 > 0){
    let primes = [];

    for(let i = num1; i <= num2; i++){
      if(isPrime(i)){
        primes.push(i)
      }
    }
    if(primes.length){
      return primes;
    }else{
      return "Prime numbers missing! Finder gets some amount of money!";
    }
  }else{
    return "There is non positive number in input";
  }
}

let res = primesFromRange(num1,num2);
print(res);
