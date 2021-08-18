const getSet = [];
const combSet = new Set();

function solution(relation) {
  const col = relation[0].length;
  for (let i = 1; i < 1 << col; i++) {
    if (!checkCan(i, relation)) continue;
    if (checkSet(i)) continue;
    getSet.push(i);
  }
  return getSet.length;
}

const checkCan = (key, relation) => {
  const checkSet = new Set();
  const col = relation[0].length;
  for (let i = 0; i < relation.length; i++) {
    let str = '';
    for (let j = 0; j < col; j++) {
      if (key & 1 << j) str += relation[i][j];
    }
    if (checkSet.has(str)) return false;
    checkSet.add(str);
  }
  return true;
};
const checkSet = key => {
  for (let candid of getSet) {
    if ((key & candid) === candid) return true;
  }
  return false;
};

// 참고 : https://hongnewhonglog.tistory.com/43

let rel1 = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]
let rel2 = [["a", "aa"], ["aa", "a"], ["a", "a"]]
console.log(solution(rel1))
console.log(solution(rel2))

// console.log(solution(rel1) === 2)
// console.log(solution(rel1) === 1)