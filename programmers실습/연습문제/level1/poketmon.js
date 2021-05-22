function solution(nums) {
  let N = Math.floor(nums.length / 2);
  let cout = new Set(nums).size;

  return N <= cout ? N : cout;
}

let ary1 = [3, 1, 2, 3]
let ary2 = [3, 3, 3, 2, 2, 4]
let ary3 = [3, 3, 3, 2, 2, 2]

console.log(solution(ary1));
console.log(solution(ary2));
console.log(solution(ary3));