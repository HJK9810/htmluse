const ranks = ['*+-', '*-+', '+*-', '+-*', '-*+', '-+*'];

function solution(expression) {
  let answer = 0;
  const splitstring = expression.split(/(\D)/); // 숫자와 기호 분리

  for (let index = 0; index < ranks.length; index++) {
    const rank = ranks[index].split('');
    let numbers = [...splitstring]; // 반복을 위해 배열 분리

    for (let i = 0; i < 3; i++) {
      // 전체 길이의 절반을 나눴을때, 소숫점 아래를 버리면 기호들의 수와 동일하다.
      const operleng = Math.floor(numbers.length / 2);

      for (let j = 0; j < operleng; j++) {
        const idx = numbers.indexOf(rank[i]);
        let sum = 0;

        if (idx !== -1) {
          switch (rank[i]) {
            case '*':
              sum = Number(numbers[idx - 1]) * Number(numbers[idx + 1]);
              break;
            case '+':
              sum = Number(numbers[idx - 1]) + Number(numbers[idx + 1]);
              break;
            case '-':
              sum = Number(numbers[idx - 1]) - Number(numbers[idx + 1]);
              break;
            default:
          }

          numbers.splice(idx - 1, 3, sum); // 계산된 값, 합계값과 교체
        }
      }
    }

    if (answer < Math.abs(numbers[0])) answer = Math.abs(numbers[0]);
  }
  return answer;
}

console.log(solution("100-200*300-500+20"))
console.log(solution("50*6-3*2"))
console.log(solution("200-300-500-600*40+500+500"))

console.log(solution("100-200*300-500+20") === 60420)
console.log(solution("50*6-3*2") === 300)
console.log(solution("200-300-500-600*40+500+500") === 1248000)