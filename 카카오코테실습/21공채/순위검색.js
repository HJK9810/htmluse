function checkP(word, info) {
  let count = 0;
  for (let i of info) {
    let memberinfo = i.split(" ");

    if (word[0] === memberinfo[0] || word[0] == "-") {
      if (word[1] === memberinfo[1] || word[1] == "-") {
        if (word[2] === memberinfo[2] || word[2] == "-") {
          if (word[3] === memberinfo[3] || word[3] == "-") {
            if (Number(memberinfo[4]) >= Number(word[4])) {
              count++;
            }
          }
        }
      }
    }
  }

  return count;
}

function solution(info, query) {
  let answer = [];

  for (let i = 0; i < query.length; i++) {
    let ary = query[i].replace(/and /g, '');
    let word = ary.split(" ");
    let num = checkP(word, info)

    answer.push(num);
  }

  return answer;
}

let info1 = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
let query1 = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]

console.log(solution(info1, query1));