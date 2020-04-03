// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// SOLUTION

function sortArray(array) {
  let filter = array.filter(odd => odd % 2 != 0);
  let sort = filter.sort((x, y) => x - y);
  let map = array.map(odd => (odd % 2 != 0 ? filter.shift() : odd));
  return map;
}
