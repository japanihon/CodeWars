// Write function avg which calculates average of numbers in given list.

// SOLUTION

function find_average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
