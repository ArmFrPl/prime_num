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
      return "there are no prime numbers";
    }
  }else{
    return "";
  }
}

let res = primesFromRange(num1,num2);
if(typeof res !== "string"){
  print(res);
}else{
  console.log("one of numbers are not positive");
}