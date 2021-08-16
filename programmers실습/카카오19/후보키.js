function solution(relation) {
  let col = relation[0].length;
  let keyList = [];
  let combList = [];

  // 조합배열용
  const comb = (arr, idx, r, target) => {
    if (r === 0) combList.push(Object.assign([], arr));
    else if (target === col) return;
    else {
      arr[idx] = target;
      comb(arr, idx + 1, r - 1, target + 1);
      comb(arr, idx, r, target + 1);
    }
  }

  for (let i = 1; i <= col; i++) {
    comb([], 0, i, 0);
  }

  for (let i = 0; i < combList.length; i++) {
    addKey(keyList, combList[i], relation);
  }
  console.log(keyList)
  return keyList.length;
}

// 후보키 체크
const addKey = (keyList, key, relate) => {
  // 최소성 체크
  let check = true;
  for (let i = 0; i < keyList.length; i++) {
    let now = keyList[i];
    for (let j = 0; j < key.length; j++) {
      now = now.filter(el => el !== key[j]);
    }
    if(now.length === 0) check = false;
  }

  if (keyList.length !== 0 && !check) return;

  let ary = [];
  let unique = true;
  // 유일성 체크
  for (let i = 0; i < relate.length; i++) {
    let findel = ary.find(el => {
      let flag = true;
      for (let j = 0; j < key.length; j++) {
        if (el[key[j]] !== relate[j][key[j]]) flag = false;
      }
      return flag;
    });

    if (findel !== undefined) unique = false;
    else ary.push(relate[i]);
  }

  if (unique) keyList.push(key);
}

let rel1 = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]
let rel2 = [["a", "aa"], ["aa", "a"], ["a", "a"]]
console.log(solution(rel1))
console.log(solution(rel2))

// console.log(solution(rel1) === 2)
// console.log(solution(rel1) === 1)