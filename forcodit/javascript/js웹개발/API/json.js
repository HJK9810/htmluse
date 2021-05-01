fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.text())
  .then((result) => {
    // JSON => js 객체로 변화
    const users = JSON.parse(result);
    // JSON 길이 출력
    console.log(users.length);
    users.forEach((user) => {
      console.log(user.name)
    });
  });

// id : 3인 직원 get 
fetch('https://learn.codeit.kr/api/members/3')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

// 새 멤버 추가
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmail.kr',
  department: 'engineering',
};
fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  // 헤더 추가
  headers: {
    // content-type추가: json데이터
    'Content-Type': 'application/json'
  },
  // js 객체 => JSON 변화
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });

// 맴버 수정
const member = {
  name: 'Alice',
  email: 'alice@codeitmail.kr',
  department: 'marketing',
};
fetch('https://learn.codeit.kr/api/members/2', {
  method: 'PUT',
  // js 객체 => JSON 변화
  body: JSON.stringify(member),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });

// 맴버 삭제
fetch('https://learn.codeit.kr/api/members/6', {
  method: 'DELETE',
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });ㅡ먀ㅣ