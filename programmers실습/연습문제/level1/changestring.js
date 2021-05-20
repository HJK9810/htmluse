function solution(s) {
  let answer = []
  let word = s.split(' ');

  for (let i = 0; i < word.length; i++) {
    let ary = word[i].split('');

    for (let j = 0; j < ary.length; j++) {
      (j % 2 === 0) ? ary[j] = ary[j].toUpperCase() : ary[j] = ary[j].toLowerCase();
    }
    
    answer.push(ary.join(''))
  };
  return answer.join(' ');
}

console.log(solution("try hello world"));