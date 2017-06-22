// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

// function isCharacterAVowel(input){
//    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u"){
//     return true
//    } else {
//     return false
//    }
//  }
// isCharacterAVowel("e")

function vowelNot(input){
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var result = false
  for(var i = 0; i < vowels.length; i++){
    if(input === vowels[i]){
      result = true
    }
  }return result
}

vowelNot('k')
