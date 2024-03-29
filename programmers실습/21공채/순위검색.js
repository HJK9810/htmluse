function solution(info, query) {
  let answer = [];
  let infoMap = {};

  function combine(cnt, key, ary, score) {
    if (cnt === 4) {
      if (!infoMap[key]) infoMap[key] = [score];
      else infoMap[key].push(score);
      return;
    }

    combine(cnt + 1, key + ary[cnt], ary, score);
    combine(cnt + 1, key + '-', ary, score);
  }

  for (let i = 0; i < info.length; i++) {
    const ary = info[i].split(' ');
    const score = Number(ary.pop());

    combine(0, '', ary, score);
  }

  for (const key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    const check = query[i].replace(/and /g, '').split(' ');
    const Score = check.pop();
    const KEY = check.join('');
    const scoreAry = infoMap[KEY];

    if (scoreAry) {
      let start = 0;
      let end = scoreAry.length;

      while (start < end) {
        const Mid = Math.floor((start + end) / 2);

        if (scoreAry[Mid] >= Score) end = Mid;
        else if (scoreAry[Mid] < Score) start = Mid + 1;
      }

      answer.push(scoreAry.length - start);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

let info1 = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
let query1 = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]

console.log(solution(info1, query1));