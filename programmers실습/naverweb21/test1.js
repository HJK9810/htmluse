function solution(k, rates) {
  let answer = k;
  k = 0;

  for (let i = 0; i < rates.length; i++) {
    if (k >= rates[i]) {
      answer += rates[i - 1];
      k = 0;
    }

    if (answer >= rates[i] && rates[i] < rates[i + 1]) {
      answer -= rates[i];
      k = rates[i];
    }

    if ((k !== 0 && k <= rates[i]) && i === rates.length - 1) answer += rates[i];

    console.log(`i : ${i},  현 소지금 : ${answer}, 구매 금액 : ${k}`)
  }

  return answer;
}

let r1 = [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100]
let r2 = [1500, 1400, 1300, 1200]
console.log(solution(1000, r1))
console.log(solution(1500, r2))