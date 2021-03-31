// 구구단 출력
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// 피보나치 수열 50번째 항까지 계산.
let num1 = 1, num2 = 1;
console.log(num1);
for (let i = 1; i < 50; i++) {
  let temp = num2;
  console.log(num2);
  num2 += num1;
  num1 = temp;
}