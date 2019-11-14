function isPrime (num) {
  if (num <= 1){
    return false;
  }

  let div = 2;

  while(div <= Math.sqrt(num)){
    if(num % div === 0){
      return false;
    }
    div++;
  }
  return true;
}

module.exports = {
  findPrimes: function(num1, num2){
    if(num1 > 0 && num2 > 0) {
      let primes = [];

      for (let i = num1; i <= num2; i++) {
        if(isPrime(i)) {
          primes.push(i)
        }
      }
      return primes;
    }
  },

  print: function (arr) {
    if(!arr.length){
      console.log("Prime numbers missing! Finder gets some amount of money!");
    }else{
      for(let i = 0; i < arr.length; i++)
        console.log(arr[i]);
    }
  }
}
