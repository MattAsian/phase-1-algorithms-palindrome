function isPalindrome(word) {
  let wordLower = word.toLowerCase();
  let wordAr = wordLower.split('').reverse().join('');
  return wordAr === wordLower;
}

/* 
  Add your pseudocodea here
  1. break down palindromes into arrays
  2. flip
  3. put back together array
  4. return array
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
