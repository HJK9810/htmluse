function solution(skill, skill_trees) {
  let answer = -1;
  let st = skill.split('');

  for (let i = 0; i < skill_trees.length; i++) {
    const myS = skill_trees[i].split('');
    let check = 0;

    while (skill.length > 0) {
      const idx = myS.indexOf(st.shift());
      if (idx !== -1) {
        check++;
        myS.slice(idx);
      } else {
        if (st.length > 0) {
          if (myS.indexOf(st[0]) === -1) {
            answer++;
          }
          break;
        }
      }

      if (myS.length === 0) {
        answer++;
        break;
      }
    }
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))