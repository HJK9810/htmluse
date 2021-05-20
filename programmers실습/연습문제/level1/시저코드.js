const solution = (s, n) => {
  let answer = [];
  s.split('').map(el => {
    let els = el;

    if (el != ' ') {
      el = el.charCodeAt(0) + n;

      if (els === els.toLowerCase() && el > 'z'.charCodeAt(0)) {
        el = (el - 'z'.charCodeAt(0) - 1) + 'a'.charCodeAt(0);
      } else if (els === els.toUpperCase() && el > 'Z'.charCodeAt(0)) {
        el = (el - 'Z'.charCodeAt(0) - 1) + 'A'.charCodeAt(0);
      }

      els = String.fromCharCode(el);
    } else {
      els = ' ';
    }
    
    answer.push(els);
  });

  return answer.join('');
};


console.log(solution("AB", 1))
console.log(solution("Z", 1))
console.log(solution("a B z", 4))
