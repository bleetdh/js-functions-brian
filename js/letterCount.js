// Write a function that takes a string that finds out how many times a character occurs.
// Hint: Loop through each letter, and increment the value to a key in an object. The key should be that object.

var word = 'Hello'

function letterCount(input){
  var freq = {};
    for (var i=0; i<input.length;i++) {
        var character = input.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
}
letterCount(word)
