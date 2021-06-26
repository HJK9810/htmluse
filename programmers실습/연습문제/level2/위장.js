function solution(clothes) {
  let answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (let key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
}

let clo1 = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
let clo2 = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]
console.log(solution(clo1))
console.log(solution(clo2))