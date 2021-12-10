// 전력망 분리
function solution(n, wires) {
  let first = [];
  let last = [];
  let tree = {};

  // 트리 생성
  for (let i = 0; i < wires.length; i++) {
    const [nod1, nod2] = wires[i];
    if (!tree[nod1]) tree[nod1] = [];
    if (!tree[nod2]) tree[nod2] = [];
    tree[nod1].push(nod2);
    tree[nod2].push(nod1);
  }

  // 트리 탐색용 함수
  const checkTree = (root, exc) => {
    let count = 0;
    const que = [root];
    const visited = [];
    visited[root] = tree;

    while (que.length) {
      const cur = que.pop();
      tree[cur].map(next => {
        if (next !== exc && !visited[next]) {
          visited[next] = tree;
          que.push(next);
        }
      });
      count++;
    }
    return count;
  }

  // 각 트리 경로를 탐색하며 수 체크
  let answer = n;
  wires.map(ary => {
    const [a, b] = ary;
    const check = Math.abs(checkTree(a, b) - checkTree(b, a));
    answer = answer > check ? check : answer;
  });
  return answer;
}

console.log(solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]))
console.log(solution(4, [[1, 2], [2, 3], [3, 4]]))
console.log(solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]))

// console.log(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])===3)
// console.log(solution(4,	[[1,2],[2,3],[3,4]])===0)
// console.log(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])===1)