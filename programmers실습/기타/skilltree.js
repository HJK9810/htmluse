function solution(skill, skill_trees) {
  let answer = 0;
  const st = skill.split('');

  for (let i = 0; i < skill_trees.length; i++) {
    const myS = skill_trees[i].split('');
    let idx = -1;
    let check = 0;

    for (let j = 0; j < st.length; j++) {
      const index = myS.indexOf(st[j]);

      if (index > idx || idx === (st.length - 1)) {
        idx = index;
        check++;
      } else {
        check = 0;
        break;
      }
    }
    if (check) answer++;
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
console.log(solution("CBD", ["CAD"]))
console.log(solution("CBD", ["AEF", "ZJW"]))
console.log(solution("REA", ["REA", "POA"]))
console.log(solution("CBDK", ["CB", "CXYB", "BD", "AECD", "ABC", "AEX", "CDB", "CBKD", "IJCB", "LMDK"]))
console.log(solution("BDC", ["AAAABACA"]))
console.log(solution("CBD", ["C", "D", "CB", "BDA"]))
// 결과 : 2 0 2 1 4 0 2