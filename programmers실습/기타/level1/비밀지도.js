function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let line = [];
    let num1 = arr1[i].toString(2).padStart(n, 0);
    let num2 = arr2[i].toString(2).padStart(n, 0);

    for (let j = 0; j < n; j++) {
      Number(num1[j]) || Number(num2[j]) ? line.push('#') : line.push(' ');
    }
    answer.push(line.join(''));
  }

  return answer;
}

let ary1 = [9, 20, 28, 18, 11]
let ary2 = [30, 1, 21, 17, 28]

let arr1 = [46, 33, 33, 22, 31, 50]
let arr2 = [27, 56, 19, 14, 14, 10]

console.log(solution(5, ary1, ary2));
console.log(solution(6, arr1, arr2));