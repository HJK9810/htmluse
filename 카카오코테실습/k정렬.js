function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let copyarr = [...array]
    let ary = [...commands[i]];
    let arr = copyarr.slice((ary[0] - 1), ary[1]);

    arr.sort((a, b) => (a - b));
    answer.push(arr[(ary[2] - 1)]);
  }

  return answer;
}

let ary1 = [1, 5, 2, 6, 3, 7, 4]
let command = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

console.log(solution(ary1, command));