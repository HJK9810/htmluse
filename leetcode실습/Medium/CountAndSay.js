/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1";

  const str = countAndSay(n - 1);
  let result = "";

  let count = 0;
  let base = "";
  for (let index = 0; index < str.length; index++) {
    if (!index) {
      base = str[index];
      count = 1;
      continue;
    }

    if (base === str[index]) count++;
    else {
      result += count + base;
      base = str[index];
      count = 1;
    }
  }

  return result + count + base;
};

console.log(countAndSay(4))
console.log(countAndSay(4) === "1211")
console.log(countAndSay(1))
console.log(countAndSay(1) === "1")
console.log(countAndSay(5))
console.log(countAndSay(5) === "111221")
