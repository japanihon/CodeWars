// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// SOLUTION

function accum(s) {
  let spl = s.split("");
  let mapping = spl.map((x, index) => {
    let repeat = x.repeat(index + 1);
    return repeat.charAt(0).toUpperCase() + repeat.slice(1).toLowerCase();
    //      console.log(repeat.charAt(0).toUpperCase() + repeat.slice(1).toLowerCase())
  });
  return mapping.join("-");
}
