// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  expect(repeatStr(str,count)).toEqual("hellohellohello");
});
test(" should return original 'str' without repetition", ()=>{
  const str = "hello";
  const count = 1;
  expect(repeatStr(str, count)).toEqual("hello");
});
test("should return empty string", ()=>{
  const str = "hello";
  const count = 0;
  expect(repeatStr(str, count)).toEqual("");

});
test("should throw negative counts are not valid Error", ()=>{
const str = "hello";
  const count = -1;
  expect(()=> repeatStr(str, count)).toThrow();
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
