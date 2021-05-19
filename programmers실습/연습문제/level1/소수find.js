// 에라토스테네스의 체 구현
/**
 * 1. n 사이즈의 배열을 true로 채운다.
 * 2. 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
 * 3. arr[i] 가 소수일 경우, 반복문을 진행한다.
 * 4. 맨 처음 시작하는 2는 소수이므로, 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
 * 5. 제곱근까지 반복한다.
 */
function solution(n) {
  let ary = Array(n + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (ary[i]) {
      for (let j = i * i; j <= n; j += i) {
        ary[j] = false;
      }
    }
  }
  ary.splice(0, 2, false, false);
  let answer = ary.filter(el => el === true).length;

  return answer;
}

console.log(solution(10))
console.log(solution(5))