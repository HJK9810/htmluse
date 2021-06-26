function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && number[i] > stack[stack.length - 1] && k > 0) {
      k -= 1;
      stack.pop();
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}

console.log(solution("1924", 2))
console.log(solution("1231234", 3))
console.log(solution("4177252841", 4))