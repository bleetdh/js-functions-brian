// Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.
function isPrime(input){
  if(input===0 || input===1){
    return false
  }
  for(var i = 2; i<input; i++){
    if (input%i === 0){
      return false
    }
  }
  return i
}

function primes(num){
  var result = []
  for(var i = 0; i <= num; i++)
  if(isPrime(i) !== false){
    result.push(isPrime(i))
  }
  return(result)
}
primes(5)
