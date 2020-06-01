/*

INSTRUCTION

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F

*/

// SOLUTION

const abbrevName = name => {
  const split = name.split(" ");
  const map = split.map(x => x[0]);
  const string = map.toString();
  const replace = string.replace(",", ".");
  const capital = replace.toUpperCase();
  return capital;
};
