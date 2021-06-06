// stack을 이용한 활용 => 효율성 up
const solution = s => {
  let stack = [];
  if (s.length % 2 === 1) {
    return 0;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (stack.length === 0 || stack[stack.length - 1] !== s.charAt(i)) {
        stack.push(s.charAt(i))
      } else {
        stack.pop()
      }
    }
    return stack.length === 0 ? 1 : 0;
  }
};

function solution(s) {
  let string = s.split('');
  if (string.length % 2 === 1) {
    return 0;
  } else {
    let i = 0;
    while (i < string.length) {
      if (string[i] === string[i + 1]) {
        string.splice(i, 2);
        i === 0 ? i = 0 : i -= 1;
      } else {
        i++;
      }
      if (string.length === 0)
        return 1;
    }
  }

  return s.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'))
console.log(solution('cdcd'))