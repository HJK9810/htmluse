function solution(n, left, right) {
  let answer = [];

  const startcow = Math.floor(left / n);
  const startrow = left % n;
  const ansleng = right - left + 1;
  let count = 0;

  const forloop = (x, i) => {
    for (let j = x; j < n; j++) {
      if (j <= i) {
        answer.push(i + 1);
        count++;
      }
      else {
        answer.push(j + 1);
        count++;
      }
      if (count === ansleng) return answer;
    }
    return answer;
  }

  for (let i = startcow; i < n; i++) {
    if (i === 0) {
      let j = startrow;
      while (j < n) {
        answer.push(j + 1);
        j++;
        count++;

        if (count === ansleng) return answer;
      }
    } else {
      if (count) {
        forloop(0, i);

        if (count === ansleng) return answer;
      } else {
        forloop(startrow, i);

        if (count === ansleng) return answer;
      }
    }
  }
}


console.log(solution(3, 2, 5))
console.log(solution(4, 7, 14))
console.log(`[3,2,2,3]\n[4,3,3,3,4,4,4,4]`)