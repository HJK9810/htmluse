function solution(cacheSize, cities) {
  let answer = 5 * cacheSize;
  let stack = cities.splice(0, cacheSize);

  // for (let i = 0; i < cacheSize; i++) {
  //   stack.push(cities.shift());
  //   answer += 5;
  // }

  for (let i = 0; i < cities.length; i++) {
    const idx = stack.findIndex(el => el === cities[i]);
    if (idx !== -1) {
      stack.push(stack.splice(idx, 1));
      answer += 1;
    } else {
      stack.shift();
      stack.push(cities[i]);
      answer += 5;
    }
  }
  return answer;
}

let city1 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
let city2 = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]
let city3 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]
let city4 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]
let city5 = ["Jeju", "Pangyo", "NewYork", "newyork"]
let city6 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]

console.log(solution(3, city1))
console.log(solution(3, city2))
console.log(solution(2, city3))
console.log(solution(5, city4))
console.log(solution(2, city5))
console.log(solution(0, city6))