// for(let i=1;i<=100;i++) {
//   if(i%2==0){
//     console.log(i);
//   }
// }

function printTriangle(height) {
  // 여기에 코드를 작성해 주세요.
  for (let i = 1; i <= height; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

console.log('\n\n');

// let i=1;
// while(i<100) {
//   if(i%2==1) {
//     console.log(i);
//   }
//   i++;
// }

const N = 180;
// 여기에 코드를 작성해 주세요.
let i = 1;
let count = 0;
while (i <= N) {
  if (N % i === 0) {
    console.log(i);
    count++;
  }
  i++;
}
console.log(`${N}의 약수는 총 ${count}개입니다.`);