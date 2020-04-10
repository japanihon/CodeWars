// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// solution("camelCasing")  ==  "camel Casing"

// SOLUTION

function solution(string) {
  let spl = string.split("");
  let map = spl.map(letter =>
    letter === letter.toUpperCase() ? ` ${letter}` : letter
  );
  let join = map.join("");
  return join;
}
