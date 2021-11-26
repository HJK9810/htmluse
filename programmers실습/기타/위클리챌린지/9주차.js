function solution(n, wires) {
  let first = [];
  let last = [];
  let tree = {};

  // 트리 생성
  for (let i = 0; i < wires.length; i++) {
    const [nod1, nod2] = wires[i];
    if(!tree[nod1]) tree[nod1] = [];
    if(!tree[nod2]) tree[nod2] = [];
    tree[nod1].push(nod2);
    tree[nod2].push(nod1);
  }

  let i = 1;
  let j = n;

  while (first.length + last.length !== n) {
    first.push(i);

    if (tree[i].filter(el => el === i + 1).length !== -1) i += 1;
    else {
      for (let k = 1; i - k !== 0; k++) {
        if (tree[i - k].filter(el => el === i + 1).length !== -1) {
          i += 1;
          break;
        }
      }
    }

    if (first.length + last.length === n) break;

    last.push(j);

    if (tree[j].filter(el => el === j - 1).length !== -1) j -= 1;
    else {
      for (let k = 1; j + k !== n; k++) {
        if (tree[j + k].filter(el => el === j - 1).length !== -1) {
          j -= 1;
          break;
        }
      }
    }
  }
  console.log(`first: [${first}]\nlast:[${last}]`)
  return Math.abs(first.length - last.length);
}

console.log(solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]))
console.log(solution(4, [[1, 2], [2, 3], [3, 4]]))
console.log(solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]))

// console.log(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])===3)
// console.log(solution(4,	[[1,2],[2,3],[3,4]])===0)
// console.log(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])===1)