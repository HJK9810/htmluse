function solution(n, words) {
  let answer = [1, 1];
  let que = [];
  const leng = words.length;

  let first = words.shift();
  let index = 0;

  while (index != -1) {
    que.push(first);
    const last = first.charAt(first.length - 1);
    index = words.findIndex(el => el.charAt(0) === last);
    first = words.splice(index, 1).join('');

    if (que.find(el => el === first)) return [answer[0]+1, answer[1]];

    if (answer[0] === n) {
      answer[0] = 1;
      answer[1] += 1;
    } else answer[0]++;

    if (answer[0] * answer[1] === leng) return [0, 0];
  }
  return answer;
}

let word1 = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
let word2 = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]
let word3 = ["hello", "one", "even", "never", "now", "world", "draw"]

console.log(solution(3, word1));
console.log(solution(5, word2));
console.log(solution(2, word3));