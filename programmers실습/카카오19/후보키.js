function solution(relation) {
  let answer = 0;
  let len = relation.length;
  let col = relation[0].length;

  for (let n = 0; n < col; n++) {
    let check = new Set();
    for (let i = 0; i < len; i++) {
      check.add(relation[i][n]);
    }

    if (check.size !== len) {
      for (let count = 2; n + count <= col; count++) {
        check.clear();
        for (let i = 0; i < len; i++) {
          check.add(relation[i].splice(n, count).join(''));
        }
        if (check.size === len) {
          answer++;
          break;
        }
      }
    } else answer++;
  }
  return answer;
}

let rel1 = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]
let rel2 = [["a", "aa"], ["aa", "a"], ["a", "a"]]
// console.log(solution(rel1))
console.log(solution(rel2))

// console.log(solution(rel1) === 2)
// console.log(solution(rel1) === 1)