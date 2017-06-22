//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfThree(num1, num2, num3){
  if (num1 > num2 && num1 > num3){
    return num1
  } else if (num2 > num1 && num2 > num3){
    return num2
  } else if (num3 > num1 && num3 > num2){
    return num3
  }
}
maxOfThree(1,2,3)
