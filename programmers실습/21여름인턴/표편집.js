function solution(n, k, cmd) {
  let answer = [];
  let delet = [];

  for (let i = 0; i < n; i++) {
    answer.push('O');
  }

  for (let comend of cmd) {
    switch (comend.charAt(0)) {
      case 'U':
        k -= Number(comend.charAt(2));
        break;
      case 'D':
        k += Number(comend.charAt(2));
        break;
      case 'C':
        if (n == (k + 1)) {
          delet.push(k);
          n -= 1;
          k -= 1;
        }
        else {
          delet.push(k);
          n -= 1;
        }
        break;
      case 'Z':
        n++;
        let popped = delet.pop()
        if (popped < k)
          k++;
        break;
      default:
        break;
    }
  }

  for (let i = 0; i < delet.length; i++) {
    answer[delet[i]] = 'X'
  }

  return answer.join('');
}

let cmd1 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]
let cmd2 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]

console.log(solution(8, 2, cmd1));
console.log(solution(8, 2, cmd2));