/*

INSTRUCTION

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

Notes:
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

// SOLUTION

const duplicateEncode = word => {
  const lowerCase = word.toLowerCase();
  const spl = lowerCase.split("");
  const map = spl.map((char, _, array) =>
    array.indexOf(char) === array.lastIndexOf(char) ? "(" : ")"
  );
  const join = map.join("");
  return join;
};
