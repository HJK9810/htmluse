function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  // 다리 길이만큼의 배열 초기화
  const bridge = Array.from({ length: bridge_length }, () => 0);

  while (bridge.length) {
    bridge.shift();
    time++;

    if (truck_weights.length) {
      // 현재 다리에 올라간 무개
      const sum = bridge.reduce((sum, culValue) => sum + culValue);
      if (sum + truck_weights[0] <= weight) { // 다리에 무개가 충분할경우
        bridge.push(truck_weights.shift()); // 트럭하나 다리위에 얹기
      } else { //시간의 흐름만 표시
        bridge.push(0);
      }
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]))
console.log(solution(100, 100, [10]))
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))