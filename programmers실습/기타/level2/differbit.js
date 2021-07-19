function solution(numbers) {
  let answer = [];
  numbers.forEach(num => {
    if (num % 2 === 0) num++;
    else {
      const standard = '0' + num.toString(2);
      const check = standard.replace('01', '10');
      num = parseInt(check, 2);
    }
    answer.push(num);
  });
  return answer;
}

console.log(solution([2, 7]))
console.log(solution([10, 12, 9, 15, 3, 100000]))