function solution(a, b) {
  let answer = 0;

  a.forEach((el, i) => {
    answer += el * b[i];
  });
  return answer;
}

let a1 = [1,2,3,4]	
let b1 = [-3,-1,0,2]
let a2 = [-1,0,1]	
let b2 = [1,0,-1]

console.log(solution(a1, b1))
console.log(solution(a2, b2))