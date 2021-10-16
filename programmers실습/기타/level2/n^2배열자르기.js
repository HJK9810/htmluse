function solution(n, left, right) {
  let array = Array.from({ length: n }, () => Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        array[i][i] = i + 1;
        break;
      }

      array[i][j] = i + 1;
      array[j][i] = i + 1;
    }
  }

  let answer = array.flat()
  return answer.slice(left, right + 1);
}


console.log(solution(3, 2, 5))
console.log(solution(4, 7, 14))
console.log(`[3,2,2,3]\n[4,3,3,3,4,4,4,4]`)