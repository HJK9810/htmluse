function solution(N, road, K) {
  let answer = 1;
  // 각 마을마다 지나갈수 있는 모든루트 정리
  let Roads = {};
  for (let i = 1; i <= N; i++) {
    let ary = road.filter(el => el[0] === i);
    let arr = road.filter(el => el[1] === i);
    for (let j = 0; j < arr.length; j++) {
      const [x, y, z] = arr[j];
      arr[j] = [y, x, z];
    }
    Roads[i] = ary.concat(arr);
  }

  return answer;
}

console.log(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3))
console.log(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4))