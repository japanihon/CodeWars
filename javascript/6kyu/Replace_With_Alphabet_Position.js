// Welcome.
//
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.
//
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// SOLUTION

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function splitAlphabet(text) {
  return text.split("");
}

function convertLetterToNumber(array) {
  const firstConvert = array.map(
    letter => alphabet.indexOf(letter.toLowerCase()) + 1
  );
  return firstConvert.filter(number => number >= 1 && number <= 27);
}

function alphabetPosition(text) {
  const arrayOfLetter = splitAlphabet(text);
  const arrayOfNumbers = convertLetterToNumber(arrayOfLetter);
  return arrayOfNumbers.join(" ");
}
