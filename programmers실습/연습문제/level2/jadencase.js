function solution(s) {
  let word = s.split(' ');
  for (let i = 0; i < word.length; i++) {
    let ans = word[i].split('');

    ans[0] = ans[0].toUpperCase();

    for (let j = 1; j < ans.length; j++) {
      ans[j] = ans[j].toLowerCase();
    }
    word[i] = ans.join('');
  }

  return word.join(' ');
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));