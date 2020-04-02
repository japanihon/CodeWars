// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// SOLUTION

function solution(str) {
  let regex = /([A-Z][A-Z])/gi;
  let spl = str.split(regex);
  let map = spl.map(x => (x.length % 2 == 0 ? x : `${x}_`));
  let filter = map.filter(Boolean);
  return filter;
}
