function solution(triangle) {
  const sumList = [];
  const lastLayer = triangle.length;

  function checkTri(layer, index, sum) {
    const value = triangle[layer - 1][index - 1];

    if (layer === lastLayer) {
      sumList.push(sum + value);
      return;
    }

    checkTri(layer + 1, index, sum + value);
    checkTri(layer + 1, index + 1, sum + value);
  }

  checkTri(1, 1, 0);

  sumList.sort().reverse();

  return sumList[0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]) === 30);
