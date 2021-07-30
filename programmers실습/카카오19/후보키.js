function solution(relation) {
  let answer = 0;
  let len = relation.length;
  let nMax = relation[0].length;
  let n = 0;

  while (n < nMax) {
    let check = new Set();
    for (let i = 0; i < len; i++) {
      check.add(relation[i][n]);
    }

    if (check.size === len) {
      answer++;
      n++;
    } else {
      let count = 2;
      check.clear();
      while (n + count < nMax) {
        for (let i = 0; i < len; i++) {
          check.add(relation[i].splice(n, count));
        }
        if (check.size === len) {
          answer++;
          break;
        }

        count++;
      }
    }
  }
  return answer;
}

let rel1 = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]
let rel2 = [["a", "aa"], ["aa", "a"], ["a,a"]]
console.log(solution(rel1))
console.log(solution(rel2))

// console.log(solution(rel1) === 2)
// console.log(solution(rel1) === 1)