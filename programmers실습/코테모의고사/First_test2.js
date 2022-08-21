function solution(want, number, discount) {
  let obj = {};
  want.forEach((el, i) => {
    obj[el] = number[i];
  });

  for (let i = 0; i < discount.length; i++) {
    let ary = [...discount].slice(i, i + 10);
    let check = true;
    for (let key in obj) {
      let count = ary.filter((el) => el == key).length;
      if (count != obj[key]) check = false;
      if (!check) break;
    }

    if (check) return i + 1;
  }
  return 0;
}

let ary = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];
console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ary));
