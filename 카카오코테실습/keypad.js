function distance(num, hand) {
  const key = {
    '1': [0, 3],
    '2': [1, 3],
    '3': [2, 3],
    '4': [0, 2],
    '5': [1, 2],
    '6': [2, 2],
    '7': [0, 1],
    '8': [1, 1],
    '9': [2, 1],
    '0': [1, 0],
    '*': [0, 0],
    '#': [2, 0],
  };

  let x = Math.abs(key[num][0] - key[hand][0]);
  let y = Math.abs(key[num][1] - key[hand][1]);

  return x + y;
}

function solution(numbers, hand) {
  var answer = '';
  let pushR = '#';
  let pushL = '*';
  let plenR = 0, plenL = 0;
  let ans = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num == 1 || num == 4 || num == 7) {
      pushL = num;
      ans.push('L');
    } else if (num == 3 || num == 6 || num == 9) {
      pushR = num;
      ans.push('R');
    } else {
      plenR = distance(num, pushR);
      plenL = distance(num, pushL);

      if (plenL == plenR) {
        if (hand == "right")
          ans.push('R');
        else
          ans.push('L');
      } else if (plenL < plenR) {
        ans.push('L');
      } else {
        ans.push('R');
      }
    }

  }

  answer = ans.join('');
  return answer;
}

let num1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand1 = "right"
let num2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand2 = "left"
let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let hand3 = "right"

console.log(solution(num1, hand1));
console.log(solution(num2, hand2));
console.log(solution(num3, hand3));