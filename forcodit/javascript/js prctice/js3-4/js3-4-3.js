// 팰린드롬 체크문제

function isPalindrome(word) {
  // 여기에 코드를 입력해 주세요.
  let check;

  for (let i = 0; i < Math.floor(word.length); i++) {
    if (word.charAt(i) == word.charAt(word.length - (i + 1))) {
      check = true;
    } else {
      return false;
    }
  }

  return check;
}

// 훨씬 더 간결한 코드
// function isPalindrome(word) {
//   // 여기에 코드를 입력해 주세요.
//   for (let i = 0; i < Math.floor(word.length / 2); i++) {
//     if (word[i] !== word[word.length - (1 + i)]) {
//       return false;
//     }
//   }
//   return true;
// }

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));