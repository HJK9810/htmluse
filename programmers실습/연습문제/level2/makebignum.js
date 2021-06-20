function solution(number, k) {
  let nums = number.split('');
  // let leng = nums.length - k;
  let max = Math.max(...(num.slice(0, k)));
  let index = nums.indexOf(max);

  nums.splice(index);
  k -= index;
  console.log(nums)

  let i = 0;
  while (k > 0) {
    if (nums[i] < nums[i + 1]) {
      nums.splice(i, 1);
      k--;
    } else {
      i++;
    }
    console.log(nums)
  }

  return nums.join('');
}

console.log(solution("1924", 2))
console.log(solution("1231234", 3))
console.log(solution("4177252841", 4))