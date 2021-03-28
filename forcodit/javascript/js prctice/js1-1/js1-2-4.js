// 여기에 코드를 입력해 주세요.
let MB = 1024;
let KB = 1024;
let GB = 1024;

function teraToGiga(data) {
  console.log(data + 'TB는');
  console.log(data * GB + 'GB 입니다.');
}

function teraToMega(data) {
  console.log(data + 'TB는');
  console.log(data * GB * MB + 'MB 입니다.');
}

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);