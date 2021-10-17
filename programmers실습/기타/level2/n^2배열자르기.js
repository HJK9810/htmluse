function solution(n, left, right) {
  let answer = [];

  const startcow = Math.floor(left / n);
  const startrow = left % n;
  const ansleng = right - left + 1;
  let count = 0;

  for (let i = startcow; i < n; i++) {
    let j = startrow;
    if (i === 0) {
      while (j < n) {
        answer.push(j + 1);
        j++;
      }

      count = answer.length;
    } else {
      if (answer.length) {
        for (j = 0; j < n; j++) {
          if (j <= i) {
            answer.push(i + 1);
            count += 1;
          }
          else {
            answer.push(j + 1);
            count += 1;
          }

          if (count === ansleng) return answer;
        }
      } else {
        for (j = startrow; j < n; j++) {
          if (j <= i) {
            answer.push(i + 1);
            count += 1;
          }
          else {
            answer.push(j + 1);
            count += 1;
          }

          if (count === ansleng) return answer;
        }
      }
    }
  }
}


console.log(solution(3, 2, 5))
console.log(solution(4, 7, 14))
console.log(`[3,2,2,3]\n[4,3,3,3,4,4,4,4]`)