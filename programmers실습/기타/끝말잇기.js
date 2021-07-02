function solution(n, words) {
  let answer = [1, 1];
  let que = [];
  const leng = words.length;

  let first = words.shift();
  let index = 0;

  while (index != -1) {
    que.push(first);
    const last = first.charAt(first.length - 1);
    index = words.findIndex(el => last === el.charAt(0));
    first = words.splice(index, 1).join('');

    if (que.find(el => el === first)) return [answer[0] + 1, answer[1]];

    if (answer[0] === n) {
      answer[0] = 1;
      answer[1] += 1;
    } else answer[0]++;

    if (leng === answer[0] * answer[1]) return [0, 0];
  }
  return answer;
}

// 타 코드 참고
function solution(n, words) {
  let stack = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!stack[word]) {
      if (i > 0 && words[i - 1].charAt(words[i - 1].length - 1) !== word.charAt(0)) {
        return [(i % n) + 1, Math.ceil((i + 1) / n)];
      } else {
        stack[word] = word;
      }
    } else {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
  }
  return [0, 0];
}

let word1 = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
let word2 = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]
let word3 = ["hello", "one", "even", "never", "now", "world", "draw"]

console.log(solution(3, word1));
console.log(solution(5, word2));
console.log(solution(2, word3));