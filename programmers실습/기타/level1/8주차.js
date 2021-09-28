function solution(sizes) {
  let wmax = 0;
  let hmax = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];

    if (w > h) {
      if (wmax < w) wmax = w;
      if (hmax < h) hmax = h;
    } else {
      if (wmax < h) wmax = h;
      if (hmax < w) hmax = w;
    }
  }

  return wmax * hmax;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]) === 4000)
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]) === 120)
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]) === 133)