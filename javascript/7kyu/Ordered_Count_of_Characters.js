/*

INSTRUCTION

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

// SOLUTION

const orderedCount = text => {
  const amountOfLetters = [...text].reduce((result, char) => ({ ...result, [char]: (result[char] || 0) + 1 }), {})
  const uniqueLetters = [...new Set([...text])]
  return uniqueLetters.map(letter => [letter, amountOfLetters[letter]])
}
