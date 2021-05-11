console.log('Start!');

fetch('https://learn.codeit.kr/api/members')
  // response : 작업성공결과
  .then((response) => response.text())
  .then((result) => { console.log(result); });

console.log('End!');