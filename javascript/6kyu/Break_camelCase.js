/*

INSTRUCTION

Complete the solution so that the function will break up camel casing, using a space between words.

Example:
solution("camelCasing")  ==  "camel Casing"

*/

// SOLUTION

const solution = string => {
  const spl = string.split("");
  const map = spl.map(letter =>
    letter === letter.toUpperCase() ? ` ${letter}` : letter
  );
  const join = map.join("");
  return join;
};
