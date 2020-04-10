// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
//
// For instance:
//
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// SOLUTION

String.prototype.camelCase = function() {
  const capitalise = function(string) {
    let stringAsArray = string.split("");
    stringAsArray[0] = stringAsArray[0].toUpperCase();

    return stringAsArray.join("");
  };

  const removeBlanks = function(string) {
    return string.length > 0;
  };

  return this.split(" ")
    .filter(removeBlanks)
    .map(capitalise)
    .join("");
};
