/*

INSTRUCTION

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

// SOLUTION

const arrayPlusArray = (arr1, arr2) => {
  const reduce1 = arr1.reduce((acc, val) => acc + val);
  const reduce2 = arr2.reduce((acc, val) => acc + val);
  return reduce1 + reduce2;
};
