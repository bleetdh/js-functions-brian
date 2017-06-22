// Create a function to return true or false if a number passed in a prime number.

var num = 12

function isPrime(input){
  if(input===0 || input===1){
    return false
  }
  for(var i = 2; i<input; i++){
    if (input%i === 0){
      return false
    }
  }
  return true
}

isPrime(num)
