function solution(numbers) {
  const ary = numbers.map(el => el + '').sort((a, b) => (b + a) - (a + b));

  return ary[0] === '0' ? '0' : ary.join('');
}

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))