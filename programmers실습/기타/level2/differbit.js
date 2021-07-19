function solution(numbers) {
  let answer = [];
  numbers.forEach(num => {
    const standard = num.toString(2).padStart(4, '0');
    let count = standard.length;

    while (count > 2) {
      count = 0;
      num++;
      const check = num.toString(2).padStart(4, '0');

      for (let i = 0; i < standard.length; i++) {
        if (standard[i] !== check[i]) count++;
      }
    }

    answer.push(num);
  });
  return answer;
}

console.log(solution([2, 7]))