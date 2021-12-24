function solution(grid) {
  let answer = [];
  let root = []; // 빛의 이동경로를 체크하기 위한 배열
  grid = grid.map(el => el.split(''));

  grid.map(element => {
    const leng = element.length;
    const ary = Array.from({ length: leng }, () => [0, 0, 0, 0]);
    root.push(ary);
  });

  return root;

  // 출력시 오름차순 정렬
  // return answer.sort((a, b) => a - b);
}

console.log(solution(["SL", "LR"]))
console.log(solution(["S"]))
console.log(solution(["R", "R"]))

console.log(`[16]\n[1,1,1,1]\n[4,4]`)