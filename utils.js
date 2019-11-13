module.exports = {
  isPrime: function (num) {
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
  },


  print: function (arr) {
    if(typeof arr === "string"){
      console.log(arr)
    }else{
      for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
      }
    }
  }
};