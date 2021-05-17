function check(s, ary, now) {
  ary[now] = Number(ary[now])
  switch (s.charAt(0)) {
    case 'D':
      ary[now] = Math.pow(ary[now], 2);
      break;
    case 'T':
      ary[now] = Math.pow(ary[now], 3);
      break;
    default:
      break;
  }

  switch (s.charAt(1)) {
    case '*':
      if (now === 0) {
        ary[now] *= 2;
      } else {
        ary[now - 1] *= 2;
        ary[now] *= 2;
      }
      break;
    case '#':
      ary[now] = (-ary[now]);
      break;
    default:
      break;
  }

  return ary;
}

function solution(dartResult) {
  let num = dartResult.replace(/[^0-9]/gi, ',').split(',').filter(Boolean);
  let sign = dartResult.replace(/[0-9]/gi, ',').split(',').filter(Boolean)

  for (let i = 0; i < num.length; i++) {
    check(sign[i], num, i);
  }

  return num.reduce((sum, el) => sum + el);
}

console.log(solution('1S2D*3T'))
console.log(solution('1D2S#10S'))
console.log(solution('1D2S0T'))
console.log(solution('1S*2T*3S'))
console.log(solution('1D#2S*3S'))
console.log(solution('1T2D3D#'))
console.log(solution('1D2S3T*'))