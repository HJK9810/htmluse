function solution(name) {
  let maxLeng = 0;

  const changeAl = letter => letter > 78 ? 91 - letter : letter - 65;
  const findA = (str, i) => {
    let cnt;
    for (cnt = 0; cnt < str.length; cnt++) {
      if (str[cnt] !== 'A') break;
    }
    return cnt - (i - 1) > maxLeng ? cnt - (i - 1) : maxLeng;
  }

  const total = [...name].reduce((total, letter, i) => {
    if (letter !== 'A') return total + changeAl(name.charCodeAt(i)) + 1;

    if (i === 0 || name[i - 1] !== 'A') {
      maxLeng = findA(name.slice(i), i);
    }
    return total + 1;
  }, 0);

  return total - maxLeng - 1;
}

console.log(solution("JEROEN"))
console.log(solution("JAN"))