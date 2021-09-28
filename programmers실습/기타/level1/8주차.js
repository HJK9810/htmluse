function solution(sizes) {
  let width = [];
  let height = [];

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];

    if (w > h) {
      width.push(w);
      height.push(h);
    } else {
      width.push(h);
      height.push(w);
    }
  }

  return Math.max(...width) * Math.max(...height);
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]) === 4000)
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]) === 120)
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]) === 133)