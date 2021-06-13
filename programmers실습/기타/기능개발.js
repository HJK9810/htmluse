function solution(progresses, speeds) {
  let out = [];
  let stack = [];

  for (let i = 0; i < progresses.length; i++) {
    let need = 100 - progresses[i];
    out.push(Math.ceil(need / speeds[i]));
  }

  let count = 1;
  for (let i = 0; i < out.length; i++) {
    if (out[i] >= out[i + 1]) {
      count++;
    } else if (i === (out.length - 1)) {
      stack.push(count);
    } else {
      stack.push(count);
      count = 1;
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