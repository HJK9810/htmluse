function solution(table, languages, preference) {
  let score = [0, 5, 4, 3, 2, 1];
  let sum = [];

  table = table.sort();

  for (let i = 0; i < table.length; i++) {
    let ary = table[i].split(' ');
    let presum = 0;

    for (let j = 0; j < languages.length; j++) {
      let idx = ary.indexOf(languages[j]);

      idx === -1 ? presum += 0 : presum += (score[idx] * preference[j]);
    }

    sum.push(presum);
  }

  let max = Math.max(...sum);

  return table[sum.indexOf(max)].split(' ')[0];
}

let t1 = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"]
let lan1 = ["PYTHON", "C++", "SQL"]
let t2 = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"]
let lan2 = ["JAVA", "JAVASCRIPT"]

console.log(solution(t1, lan1, [7, 5, 5]))
console.log(solution(t2, lan2, [7, 5]))

console.log(solution(t1, lan1, [7, 5, 5]) == "HARDWARE")
console.log(solution(t2, lan2, [7, 5]) == "PORTAL")