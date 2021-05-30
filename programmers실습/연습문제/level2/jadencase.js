function solution(s) {
  let word = s.split(' ');
  let answer = word.map(el => el === '' ? '' : el.toLowerCase()).map(el => el === '' ? '' : el.replace(el[0], el[0].toUpperCase()));

  return answer.join(' ');
}

// if 한줄화?
// const solution = (s) => {
//   return s.split(' ').map(el => el === '' ? '' : el.toLowerCase()).map(el => el === '' ? '' : el.replace(el[0], el[0].toUpperCase())).join(' ');
// }

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));