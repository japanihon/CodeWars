/*

INSTRUCTION

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

More examples in test cases.
Good luck!

*/

// SOLUTION

const solve = s => {

  const upReg = /[A-Z]/
  const lowerReg = /[a-z]/

  const up = []
  const low = []

  for(let item = 0; item < s.length; item++){
    if(upReg.test(s[item]) === true){ up.push(s[item])}
    else{ low.push(s[item])}
  }
  if(up.length <= low.length){ return s.toLowerCase()}
  else{ return s.toUpperCase()}
}
