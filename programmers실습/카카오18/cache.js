function solution(cacheSize, cities) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < cities.length; i++) {
    const idx = stack.findIndex(el => el == cities[i].toLowerCase());

    if (idx !== -1) {
      stack.push(stack.splice(idx, 1));
      answer += 1;
    } else {
      stack.length === cacheSize ? stack.shift() : stack;
      stack.push(cities[i].toLowerCase());
      answer += 5;
    }
  }
  return !cacheSize ? cities.length * 5 : answer;
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