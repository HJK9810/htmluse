function solution(citations) {
  let ary = citations.sort((a, b) => b - a);
  let len = ary.length;
  for (let h = len; h >= 0; h--) {
    if (ary.filter(el => el >= h).length >= h)
      return ary[h - 1];
  }
}

console.log(solution([3, 0, 6, 1, 5]))