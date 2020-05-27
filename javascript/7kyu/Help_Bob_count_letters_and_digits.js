/*

INSTRUCTION

Bob is a lazy man.
He needs you to create a method that can determine how many letters and digits are in a given string.

Example:
"hel2!lo" --> 6
"wicked .. !" --> 6
"!?..A" --> 1

*/

// SOLUTION

const countLettersAndDigits = input => {
  const deleteSpecialsChar = input.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\ ]/gi,
    ""
  );
  const charLeft = deleteSpecialsChar.length;
  return charLeft;
};
