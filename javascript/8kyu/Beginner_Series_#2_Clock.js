/*

INSTRUCTION

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

*/

// SOLUTION

const past = (h, m, s) => {
  const hour = Math.floor(h * 60 * 60 * 1000);
  const minute = Math.floor(m * 60 * 1000);
  const seconde = Math.floor(s * 1000);
  return hour + minute + seconde;
};
