// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// SOLUTION

function reverseWords(str) {
  const spl = str.split(" ");
  const map = spl.map(x => x.split(""));
  const mapping = map.map(x => x.reverse().join(""));
  const join = mapping.join(" ");
  return join;
}
