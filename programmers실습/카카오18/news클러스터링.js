function solution(str1, str2) {

  const exArray = test => {
    const result = [];
    for (let i = 0; i < test.length - 1; i++) {
      const tmp = test.slice(i, i + 2)
      if (tmp.search(/[^a-z]/g) >= 0) {
        continue;
      }
      result.push(tmp.toLowerCase());
    }
    return result;
  }

  const A = exArray(str1);
  const B = exArray(str2);

  const intersec = [];

  for (let i = 0; i < B.length; i++) {
    const idx = A.indexOf(B[i])
    if (idx !== -1) {
      intersec.push(A.splice(idx, 1));
    }
  }
  for (let i = 0; i < intersec.length; i++) {
    const idx = B.indexOf(intersec[i])
    if (idx !== -1) B.splice(idx, 1);
  }
  const union = A.concat(B);

  return union.length === 0 ? 65536 : Math.floor((intersec.length / union.length) * 65536);
}

// console.log(solution('FRANCE', 'french'))
// console.log(solution('handshake', 'shake hands'))
// console.log(solution('aa1+aa2', 'AAAA12'))
// console.log(solution('E=M*C^2', 'e=m*c^2'))

console.log(solution('FRANCE', 'french') === 16384)
console.log(solution('handshake', 'shake hands') === 65536)
console.log(solution('aa1+aa2', 'AAAA12') === 43690)
console.log(solution('E=M*C^2', 'e=m*c^2') === 65536)