function solution(info, query) {
  let answer = [];

  for (let i = 0, qlen = query.length; i < qlen; i++) {
    const word = query[i].replace(/and /g, '').split(' ');
    let num = 0;
    for (let j = 0, infoleng = info.length; j < infoleng; j++) {
      const memberinfo = info[j].split(' ');
      let check = true;
      for (let k = 0; k < word.length - 1; k++) {
        check === true && (word[k] === memberinfo[k] || word[k] === '-') ? check = true : check = false;
      }
      check === true && (Number(memberinfo[4]) >= Number(word[4]) || word[4] === '-') ? check = true : check = false;
      check===true ? num += 1 : num;
    }

    answer.push(num);
  }

  return answer;
}

let info1 = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
let query1 = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]

console.log(solution(info1, query1));