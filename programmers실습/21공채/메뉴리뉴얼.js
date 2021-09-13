function solution(orders, course) {
  let candid = {}; // 함수 실행을 위해 변수 생성

  const answer = course.reduce((answer, num) => {
    candid = {}; // 초기화

    for (let i = 0; i < orders.length; i++) {
      if (orders[i] < num) continue;

      combinate(orders[i].split('').sort(), '', orders[i].length, num, 0);
    }

    let menu = [];
    let mosted = 0;
    for (let key in candid) {
      let value = candid[key];
      if (value > 1) {
        if (value > mosted) {
          mosted = value;
          menu = [key];
        } else if (value === mosted) menu.push(key);
      }
    }

    mosted = 0;
    return [...answer, ...menu];
  }, []);

  function combinate (arr, target, n, r, count) {
    if (r === 0) {
      let cnt = candid[target] || 0;
      candid[target] = cnt + 1;
    } else if (n === 0 || n < r) return;
    else {
      combinate(arr, target + arr[count], n - 1, r - 1, count + 1);
      combinate(arr, target, n - 1, r, count + 1);
    }
  }

  return answer.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))

// https://after-newmoon.tistory.com/98 참고