// Simple, remove the spaces from the string, then return the resultant string.

// SOLUTION

function noSpace(phrase) {
  let string = "";

  for (let index = 0; index < phrase.length; index++) {
    let character = phrase.charAt(index);

    if (character !== " ") {
      string = string + character;
    }
  }

  return string;
}
