//Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

var sentence = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
function findLongestWord(arr){
  var longest=""
  for(var i=0; i<arr.length; i++){
    if (arr[i].length>longest.length){
      longest=arr[i]
    }
  }
  return (longest)
}
 findLongestWord(sentence)
