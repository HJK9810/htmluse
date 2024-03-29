// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
  var count = 0;
  word = word.toUpperCase();

  // 코드를 작성해주세요.
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      count++;
    }
  }

  return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
  // 코드를 작성해주세요.
  var count = 0;
  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'A') {
      count++;
    }
  }

  return count;
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));