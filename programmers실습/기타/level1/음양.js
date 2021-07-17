const solution = (absolutes, signs) => {
  let answer = 0;
  absolutes.forEach((element, i) => {
    signs[i] ? answer += element : answer -= element;
  });
  
  return answer;
}

let abs1 = [4, 7, 12]
let sign1 = [true, false, true]
let abs2 = [1, 2, 3]
let sign2 = [false, false, true]

console.log(solution(abs1, sign1))
console.log(solution(abs2, sign2))