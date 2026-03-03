function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// index starts at 0.
// The while loop runs as long as index is less than the string length.
// Inside the loop, if the character at index matches the target, the function returns that index.
// If it does not match, index increases by 1 and the loop checks again.
// This continues until the character is found or the end of the string is reached.
// b) What is the if statement used to check
// The if statement checks the character at the current index, and if it matches the target character, it returns the character index (position in the string).
// c) Why is index++ being used?
// index++ increases the index by 1 so the loop can check the next character in the string.
// d) What is the condition index < str.length used for?
// index < str.length ensures the loop runs only while the index is within the string length.
// It stops the loop when the end of the string is reached.
