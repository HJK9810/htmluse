var birthdayData = [
  '20010309전소미',
  '19960828김세정',
  '19991112최유정',
  '19960209김청하',
  '19990719김소혜',
  '19981216주결경',
  '19971201정채연',
  '19991204김도연',
  '19991204강미나',
  '19951218임나영',
  '19990803유연정'
];

function printMinors(arr) {
  console.log("미성년자 명단:");

  // 코드를 작성하세요.
  // 이 함수에 리턴값은 없습니다.
  for (let i = 0; i < arr.length; i++) {
    let youngYear = Number(arr[i].substring(0, 4));
    if (youngYear > 1998) {
      console.log(arr[i]);
    }
  }
}

// 테스트 코드
printMinors(birthdayData);