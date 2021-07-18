function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const A = [];
  const B = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const tmp = str1.slice(i, i + 2)
    if (tmp.search(/[^a-z]/g) >= 0) {
      continue;
    }
    A.push(tmp);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const tmp = str2.slice(i, i + 2)
    if (tmp.search(/[^a-z]/g) >= 0) {
      continue;
    }
    B.push(tmp);
  }

  const intersec = A.filter(el => B.includes(el));
  for (let i = 0; i < intersec.length; i++) {
    const idx = B.indexOf(intersec[i])
    if (idx !== -1) B.splice(idx, 1);
  }
  const union = A.concat(B);

  if (union.length === 0) return 65536;
  else if (intersec.length === 0) return 0;
  else return Math.floor((intersec.length / union.length) * 65536);
}

// console.log(solution('FRANCE', 'french'))
// console.log(solution('handshake', 'shake hands'))
// console.log(solution('aa1+aa2', 'AAAA12'))
// console.log(solution('E=M*C^2', 'e=m*c^2'))

console.log(solution('FRANCE', 'french') === 16384)
console.log(solution('handshake', 'shake hands') === 65536)
console.log(solution('aa1+aa2', 'AAAA12') === 43690)
console.log(solution('E=M*C^2', 'e=m*c^2') === 65536)