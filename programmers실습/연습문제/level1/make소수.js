function isprime(n) {
  let count = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0)
      count++;
  }
  return count === 1 ? true : false;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isprime(sum))
          answer++;
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));