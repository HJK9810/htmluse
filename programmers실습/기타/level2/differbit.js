function solution(numbers) {
  let answer = [];
  numbers.forEach(num => {
    if (num % 2 === 0) num++;
    else {
      const standard = '0' + num.toString(2);
      const idx = standard.lastIndexOf('0');
      num = parseInt(`${standard.slice(0, idx)}10${standard.slice(idx + 2)}`, 2);
    }
    answer.push(num);
  });
  return answer;
}

console.log(solution([2, 7]))
console.log(solution([10, 12, 9, 15, 3, 100000]))