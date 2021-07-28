// 사각형을 픽셀화시 대각선을 지나는 픽셀부분 구하는 공식
// 가로 + 세로 - 가로와 세로의 최대공약수
function solution(w, h) {
  // 최대공약수 구하는 공식
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  return w * h - (w + h - gcd(w, h));
}

console.log(solution(8, 12))