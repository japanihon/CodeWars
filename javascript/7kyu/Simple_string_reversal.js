/*

INSTRUCTION

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:
solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!

*/

// SOLUTION

const solve = str => {
  const split = [...str.split(` `).join(``)];
  const replace = str.replace(/\S/g, a => split.pop());
  return replace
}
