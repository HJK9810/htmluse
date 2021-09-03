const HOW = (num) => {
  switch (num) {
    case 0:
      return 781;
    case 1:
      return 156;
    case 2:
      return 31;
    case 3:
      return 6;
    case 4:
    default:
      return 1;
  }
}
function solution(word) {
  const Alph = ['A', 'E', 'I', 'O', 'U'];
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const idx = Alph.indexOf(char);
    idx ? answer += idx * HOW(i) : answer++;
  }
  return answer;
}

console.log(solution("AAAAE"))
console.log(solution("AAAE"))
console.log(solution("I"))
console.log(solution("EIO"))

// console.log(solution("AAAAE")==6)
// console.log(solution("AAAE")==10)
// console.log(solution("I")==1563)
// console.log(solution("EIO")==1189)