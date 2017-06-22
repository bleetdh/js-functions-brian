// Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.
//
// count += (number * index)
var arr = [1,2,3,4]

function sillySum(input) {
  var sum = 0
  for (var i = 0; i < input.length; i++){
    sum = sum + (i * input[i])
  }
  return sum
}
sillySum(arr)
