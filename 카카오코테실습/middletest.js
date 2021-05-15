function solution(answers) {
  let ans = [];
  let stu1 = [1, 2, 3, 4, 5];
  let stu2 = [2, 1, 2, 3, 2, 4, 2, 4];
  let stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,];
  let check = [];

  // 아래 for문 filter로 간략화.
  check[0] = answers.filter((el, i) => el === stu1[i % stu1.length]).length;
  check[1] = answers.filter((el, i) => el === stu2[i % stu2.length]).length;
  check[2] = answers.filter((el, i) => el === stu3[i % stu3.length]).length;

  // for (let i = 0; i < answers.length; i++) {
  //   if (answers[i] === stu1[i % 5]) {
  //     check[0] += 1;
  //   }
  //   if (answers[i] === stu2[i % 8]) {
  //     check[1] += 1;
  //   }
  //   if (answers[i] === stu3[i % 10]) {
  //     check[2] += 1;
  //   }
  // }
  console.log(check)
  let max = Math.max(...check);
  console.log(max)
  check.forEach((el, i) => {
    el === max ? ans.push(i + 1) : ans;
  })
  return ans;
}

console.log(solution([1, 2, 3, 4, 5]))
console.log(solution([1, 3, 2, 4, 2]))