function solution(triangle) {
  const table = [...triangle];

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      table[i][j] += Math.max(table[i + 1][j], table[i + 1][j + 1]);
    }
  }

  return table[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]) === 30);
