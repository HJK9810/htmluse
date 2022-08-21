function solution(X, Y) {
  let ary = [];
  for (let i = 0; i < X.length; i++) {
    if (Y.includes(X[i])) {
      ary.push(X[i]);
      Y = Y.replace(X[i], "");
    }
  }
  let str = ary.sort((a, b) => b - a).join("");
  return str.length ? parseInt(str) + "" : "-1";
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));
