function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    // 각 스킬들을 별개의 부분으로 분리
    const myS = skill_trees[i].split('');
    // 스킬을 포함하는 모든 스킬들 추출
    const str = myS.filter(el => skill.includes(el)).join('');
    // 스킬을 추출된 길이만큼 분리, 비교. 같을경우 || 스킬트리에 해당하는 스킬 제로인 경우. 둘중 하나 참일경우 ++.
    if (str === skill.substring(0, str.length) || !str.length) answer++;
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