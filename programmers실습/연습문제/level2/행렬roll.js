function solution(rows, columns, queries) {
  let answer = [];
  const matrix = Array(rows).fill(0).map(() => Array(columns));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = i * columns + j + 1;
    }
  }

  queries.forEach(query => {
    const [x1, y1, x2, y2] = query.map(el => el - 1);
    const stack = [];

    for (let i = 0; i < y2 - y1; i++) stack.push(matrix[x1][i + y1]);
    for (let i = 0; i < x2 - x1; i++) stack.push(matrix[i + x1][y2]);
    for (let i = 0; i < y2 - y1; i++) stack.push(matrix[x2][y2 - i]);
    for (let i = 0; i < x2 - x1; i++) stack.push(matrix[x2 - i][y1]);

    stack.unshift(stack.pop());
    answer.push(Math.min(...stack));

    for (let i = 0; i < y2 - y1; i++) matrix[x1][i + y1] = stack.shift();
    for (let i = 0; i < x2 - x1; i++) matrix[i + x1][y2] = stack.shift();
    for (let i = 0; i < y2 - y1; i++) matrix[x2][y2 - i] = stack.shift();
    for (let i = 0; i < x2 - x1; i++) matrix[x2 - i][y1] = stack.shift();

  });

  return answer;
}

let qury1 = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]
let qury2 = [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]
let qury3 = [[1, 1, 100, 97]]

console.log(solution(6, 6, qury1))
console.log(solution(3, 3, qury2))
console.log(solution(100, 97, qury3))