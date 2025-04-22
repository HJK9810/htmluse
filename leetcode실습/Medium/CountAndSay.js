/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1";

  const str = countAndSay(n - 1);
  let result = "";

  let count = 1;
  for (let index = 1; index < str.length; index++) {
    if (str[index] === str[index - 1]) count++;
    else {
      result += count + str[index - 1];
      count = 1;
    }
  }

  return result + count + str[str.length - 1];
};

console.log(countAndSay(4))
console.log(countAndSay(4) === "1211")
console.log(countAndSay(1))
console.log(countAndSay(1) === "1")
console.log(countAndSay(5))
console.log(countAndSay(5) === "111221")
