// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var word = "jag testar"
function reverseString(input){
  var split = input.split("")
  var rev = []
  for(i = split.length - 1; i >=0 -1; i--){
    rev.push(split[i])
  }
  return rev.join("")
}
reverseString(word)
