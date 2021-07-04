function solution(money, cost) {
  let answer = 0;
  let sum = 0;
  const val = cost.filter(el => el < money);
  if (!val.length) return 0;

  let max = Math.max(...val);
  let idx = cost.indexOf(max);

  if (idx <= cost.length / 2) {
    do {
      idx--;
    } while (cost[idx] === 0);
    idx++;

    while (sum <= money) {
      sum += cost[idx];
      answer++;
      idx++;
    }
  } else {
    do {
      idx++;
    } while (cost[idx] === 0);
    idx--;

    while (sum <= money) {
      sum += cost[idx];
      answer++
      idx--;
    }
  }
  return answer -= 1;
}

let co1 = [0, 900, 0, 200, 150, 0, 30, 50]
let co2 = [245, 317, 151, 192]
console.log(solution(420, co1))
console.log(solution(100, co2))