const ranks = [
  ['*', '+', '-'],
  ['*', '-', '+'],
  ['+', '*', '-'],
  ['+', '-', '*'],
  ['-', '*', '+'],
  ['-', '+', '*']
];

function solution(expression) {
  let answer = 0;
  const numbers = expression.split(/[*+-]/g);
  const oper = expression.match(/[*+-]/g);

  ranks.forEach(rank => {
    let nums = [...numbers];
    for (let i = 0; i < 3; i++) {
      const checki = [];
      oper.forEach((el, idx) => {if(el === rank[i]) return checki.push(idx);});

      console.log(`checki : ${checki}`)

      for (let j = 0; j < checki.length; j++) {
        switch (rank[i]) {
          case '*':
            sum = Number(numbers[checki[j]]) * Number(numbers[checki[j] + 1]);
            break;
          case '+':
            sum = Number(numbers[checki[j]]) + Number(numbers[checki[j] + 1]);
            break;
          case '-':
            sum = Number(numbers[checki[j]]) - Number(numbers[checki[j] + 1]);
            break;
          default:
        }

        nums.splice(checki[j], 2, sum, '');
        console.log(`nums: ${nums}`);
      }
    }

    if (answer < Math.abs(nums[0])) answer = Math.abs(nums[0]);
    console.log(answer)
  });

  return answer;
}

console.log(solution("100-200*300-500+20"))
// console.log(solution("50*6-3*2"))
// console.log(solution("200-300-500-600*40+500+500"))

// console.log(solution("100-200*300-500+20")===60420)
// console.log(solution("50*6-3*2")===300)
// console.log(solution("200-300-500-600*40+500+500")===1248000)