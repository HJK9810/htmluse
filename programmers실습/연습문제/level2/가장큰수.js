function solution(numbers) {
  let answer = '';
  let ary = [...numbers].map(el => el + ""); // ary : numbers요소 문자화
  let first = ary.map(el => Number(el.charAt(0))); // ary 각 요소 첫 '숫자'만 추출
  let search = [...first]; // index검색을 위한 복사
  first.sort((a, b) => a - b); // first는 이후 '제거'와 max값 추출을 위해서만 사용되므로 내림차순 정렬로 제거가 쉽도록 함
  // 배열용 반복문 기준은 first 제거
  while (first.length > 0) {
    // max는 first에서 가장 큰 숫자
    let max = Math.max(...first);
    // max값과 '동일한'값이 있는지 확인
    let check = first.filter(el => el === max).length;

    if (check == 1) {
      answer += ary[search.indexOf(max)];
      first.splice(first.indexOf(max), 1);
    } else { // max값이 동일한 값이 여러개일경우
      let index = search.indexOf(max);
      let seci = [] // 동일한 max값을 가진 인덱스 배열
      while (index != -1) {
        seci.push(index);
        index = search.indexOf(max, index + 1)
      }

      let second = []; // 동일한 값에 대한 구분을 위해 '두번째'값의 배열
      // 1자리수는 '-1'으로, 그 이외에는 숫자로 구분
      for (let i = 0; i < seci.length; i++) {
        ary[seci[i]].charAt(1) === "" ? second.push(-1) : second.push(Number(ary[seci[i]].charAt(1)));
      }
      let sorts = [...second].sort((a, b) => b - a); // 오름차순정렬
      // [0, -1]을 [-1, 0]으로 전환
      let popin = sorts.findIndex(el => el === 0);
      let pop = sorts[popin];
      sorts.splice(popin, 1);
      sorts.push(pop);

      // max 동일값에 대한 정렬 반복문
      for (let i = 0; i < sorts.length; i++) {
        sorts[i] === -1 ? index = numbers.indexOf(max) : index = seci[second.indexOf(sorts[i])];
        answer += ary[index];
      }
      first.splice(first.indexOf(max), sorts.length);
    }
  }

  return answer;
}

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))