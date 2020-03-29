// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// SOLUTION

function sumMix(x){
  var convertString = x.map(Number)
  var reduceToSum = convertString.reduce((a, b) => a + b, 0)
return reduceToSum
}
