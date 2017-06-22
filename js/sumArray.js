//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
var arr = [1,2,3,4]

function sumArray(input) {
  var sum = 0
  for (var i = 0; i < input.length; i++){
    sum = sum + input[i]
  }
  return sum
}
sumArray(arr)

function multiplyArray(input1) {
  var result = 1
  for (var i = 0; i < input1.length; i++){
    result = result * input1[i]
  }
  return result
}
multiplyArray(arr)
