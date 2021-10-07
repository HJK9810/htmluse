function solution(n, wires) {
  let first = [];
  let last = [];
  let tree = {};
  
  // 트리 생성
  for(let i=0;i<n;i++) {
    tree[i+1] = [];
  }
  console.log(tree)
  for(let i=0;i<wires.length;i++) {
    const [nod1, nod2] = wires[i];
    tree[nod1].push(nod2);
    tree[nod2].push(nod1);
  }

  let i = 1;
  let j = n;

  // while (first.length + last.length !== n) {

  // }

  return Math.abs(first.length - last.length);
}

console.log(solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]))
console.log(solution(4, [[1, 2], [2, 3], [3, 4]]))
console.log(solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]))

// console.log(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])===3)
// console.log(solution(4,	[[1,2],[2,3],[3,4]])===0)
// console.log(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])===1)