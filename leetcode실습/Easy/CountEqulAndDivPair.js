/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  let object = {};
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    num in object ? object[num].push(index) : object[num] = [index];
  }

  for (const key in object) {
    const numValues = object[key];

    for (let index = 0; index < numValues.length; index++) {
      for (let idx = index + 1; idx < numValues.length; idx++) {
        if (numValues[index] * numValues[idx] % k === 0) count++;
      }
    }
  }

  return count;
};

console.log(countPairs([3,1,2,2,2,1,3], 2));
console.log(countPairs([3,1,2,2,2,1,3], 2) === 4);
console.log(countPairs([1,2,3,4], 1));
console.log(countPairs([1,2,3,4], 1) === 0);
