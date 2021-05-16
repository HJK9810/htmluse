function solution(strings, n) {
  return strings.sort((a, b) => a.localeCompare(b.charAt(n), ));
}

console.log(solution(["sun", "bed", "car"],	1))
console.log(solution(["abce", "abcd", "cdx"],	2))