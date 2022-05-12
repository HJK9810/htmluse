function solution(info, edges) {
  let answer = 0;
  let tree = Array.from({ length: info.length }, () => []);
  for (let i = 0; i < edges.length; i++) {
    tree[edges[i][0]].push(edges[i][1]);
  }
 
  const binary = () => {
    
  }
  return tree;
}

let info1 = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1]
let edg1 = [[0, 1], [1, 2], [1, 4], [0, 8], [8, 7], [9, 10], [9, 11], [4, 3], [6, 5], [4, 6], [8, 9]]
let info2 = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
let edg2 = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [3, 7], [4, 8], [6, 9], [9, 10]]

console.log(solution(info1, edg1))
console.log(solution(info2, edg2))

// console.log(solution(info1, edg1) == 5)
// console.log(solution(info2, edg2) == 5)