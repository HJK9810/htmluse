let year = 2013;
let month = 3;
let day = 11;

// 템플릿 문자열
// `문자열 ${변수} 문자열 ${변수}`
// == "문자열" + 변수 + "문자열" + 변수
console.log(`생년월일은 ${year}년 ${month}월 ${day}일입니다.`);

function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 코드를 채워 넣으세요.
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);

