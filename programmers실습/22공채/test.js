function solution(id_list, report, k) {
  let answer = [];
  let obj = {};
  let userid = {};
  let ary = [];

  for (let i = 0; i < id_list.length; i++) {
    userid[id_list[i]] = new Set;
    obj[id_list[i]] = 0;
  }

  for (let i = 0; i < report.length; i++) {
    const [key, value] = report[i].split(' ');
    userid[key].add(value);
  }

  for(let key in userid) {
    let ary = userid[key];
    for(let id of ary) {
      obj[id] += 1;
    }
  }

  for (let key in obj) {
    if (obj[key] >= k) ary.push(key);
  }

  for (let key in userid) {
    let count = 0;
    for (let i = 0; i < ary.length; i++) {
      if (userid[key].has(ary[i])) count++;
    }

    answer.push(count);
  }
  return answer;
}


console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2))
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3))