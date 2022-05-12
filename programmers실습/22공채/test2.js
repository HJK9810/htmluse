function isPrime(num) {

  if (num === 2) {
    return true;
  } else if (num === 1 || num === undefined || num === 0) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let ary = n.toString(k).split('0');

  for (let i = 0; i < ary.length; i++) {
    let num = Number(ary[i]);
    if (isPrime(num)) answer += 1;
  }
  return answer;
}

console.log(solution(437674, 3))
console.log(solution(110011, 10))

// console.log(solution(437674,	3)===3)
// console.log(solution(110011,	10)===2)