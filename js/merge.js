// Write a function called merge. The function should take two sorted arrays of numbers as input and return a merged array of the sorted numbers from the input. For example, if the input arrays were var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9]; Then the returned array would be: [2,3,4,5,6,8,9,11].
var arr1 = [3,6,11]
var arr2 = [2,4,5,8,9]

function sortNumber(a,b) {
    return a - b;
}

function merge(arrA, arrB){
  var output= []
  for(var i = 0; i<arrB.length; i++){
    arrA.push(arrB[i])
  }
  output = arrA.sort(sortNumber)
  return output
}

merge(arr1,arr2)
