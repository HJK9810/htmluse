// function checkwin(num) {
//   switch (num) {
//     case 2:
//       return 5;
//     case 3:
//       return 4;
//     case 4:
//       return 3;
//     case 5:
//       return 2;
//     case 6:
//       return 1;
//     default:
//       return 6;
//   }
// }

function solution(lottos, win_nums) {
  let answer = [];
  let checkwin = [6, 6, 5, 4, 3, 2, 1]
  let count = 0;
  let zero = 0;
  lottos.sort((a, b) => a - b).forEach((element, index) => {
    (element === 0) ? zero = index + 1 :
      (win_nums.find((el) => element === el)) ? count++ : count;
  });
  answer[0] = checkwin[(count + zero)];
  answer[1] = checkwin[(count)];
  return answer;
}

let lotto1 = [44, 1, 0, 0, 31, 25]
let win1 = [31, 10, 45, 1, 6, 19]
let lotto2 = [0, 0, 0, 0, 0, 0]
let win2 = [38, 19, 20, 40, 15, 25]
let lotto3 = [45, 4, 35, 20, 3, 9]
let win3 = [20, 9, 3, 45, 4, 35]

console.log(solution(lotto1, win1));
console.log(solution(lotto2, win2));
console.log(solution(lotto3, win3));