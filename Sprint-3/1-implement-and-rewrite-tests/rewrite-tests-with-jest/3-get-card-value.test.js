// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
test(`should return 9 when given a 9♠ card`,()=>{
  expect(getCardValue("9♠")).toEqual(9);
});
test (`should return 10 when given a face card K♦`, ()=>{
  expect(getCardValue("K♦")).toEqual(10);
});
test(`should return 10 when given a 10`, ()=>{
  expect(getCardValue("10♥")).toEqual(10);
});
test(`should throw error for invalid Ranks`, ()=>{
  expect(()=> getCardValue("11♠")).toThrow();
});
test(`should throw error for invalid Suits`, ()=>{
  expect(()=> getCardValue("A?")).toThrow();
});
test(`should throw error for missing Suits`,()=>{
  expect(()=> getCardValue("A")).toThrow();
});
test(`should throw error for non String input`, ()=>{
  expect(()=> getCardValue("10")).toThrow();
});
// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

