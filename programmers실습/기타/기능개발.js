function solution(progresses, speeds) {
  const stack = [];
  const out = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));

  let standard = out[0]; // 시작 기준값
  let count = 1; // 동일 시기 수행 수

  for (let i = 0; i < out.length; i++) {
    if (standard >= out[i + 1]) {
      count++;
    } else {
      stack.push(count);
      count = 1;
      standard = out[i + 1];
    }
  }

  return stack;
}


let pro1 = [93, 30, 55]
let sped1 = [1, 30, 5]
let pro2 = [95, 90, 99, 99, 80, 99]
let sped2 = [1, 1, 1, 1, 1, 1]

console.log(solution(pro1, sped1))
console.log(solution(pro2, sped2))