function solution(record) {
  const answer = [];
  const member = {};
  for (let i = 0; i < record.length; i++) {
    const chat = record[i].split(' ');

    switch (chat[0]) {
      case 'Enter':
        member[chat[1]] = chat[2];
        break;
      case 'Leave':
        break;
      case 'Change':
        member[chat[1]] = chat[2];
        break;
      default:
    }
  }

  for (let i = 0; i < record.length; i++) {
    const chat = record[i].split(' ');

    switch (chat[0]) {
      case 'Enter':
        answer.push(`${member[chat[1]]}님이 들어왔습니다.`);
        break;
      case 'Leave':
        answer.push(`${member[chat[1]]}님이 나갔습니다.`);
        break;
      default:
    }
  }
  return answer;
}

let ary = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

console.log(solution(ary))