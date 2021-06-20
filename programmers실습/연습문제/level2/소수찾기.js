function isprime(n) {
  let ary = Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (ary[i]) {
      for (let j = i * i; j <= n; j += i) {
        ary[j] = false;
      }
    }
  }
  const arr = [];
  ary.forEach((el, i) => { if (el) arr.push(i); });

  return arr;
}

function solution(numbers) {
  let answer = 0;
  const num = numbers.split('').sort((a, b) => b - a);
  const ary = isprime(Number(num.join('')));

  for (let i = 0; i < ary.length; i++) {
    const checkN = ary[i].toString().split('').sort((a, b) => b - a);
    for (let j = 0; j < num.length; j++) {
      const idx = checkN.indexOf(num[j]);
      if (idx > -1) checkN.splice(idx, 1);
    }
    if(checkN.length === 0) answer++;
  }

  return answer;
}

console.log(solution("17"))
console.log(solution("011"))