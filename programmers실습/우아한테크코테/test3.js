// 음식점 하루 순 수익값 (재료명과 값, 메뉴명과 레시피와 판매가, 나간메뉴명과 그 수)
function solution(ings, menu, sell) {
  let answer = 0;
  let ingr = {};
  let benifit = {};

  // 재료:값 으로 object화 => ingr
  for (let i = 0; i < ings.length; i++) {
    const [key, price] = ings[i].split(' ');
    ingr[key] = Number(price);
  }

  // 메뉴명:순수익 으로 objec화 => benifit
  for (let i = 0; i < menu.length; i++) {
    const [name, recp, price] = menu[i].split(' ');

    let sum = 0;
    recp.split('').forEach(el => sum += ingr[el]);

    benifit[name] = price - sum;
  }

  // 순수익값
  for (let i = 0; i < sell.length; i++) {
    const [menu, count] = sell[i].split(' ');
    answer += (benifit[menu] * count);
  }

  return answer;
}

let in1 = ["r 10", "a 23", "t 124", "k 9"]
let m1 = ["PIZZA arraak 145", "HAMBURGER tkar 180", "BREAD kkk 30", "ICECREAM rar 50", "SHAVEDICE rar 45", "JUICE rra 55", "WATER a 20"]
let sel1 = ["BREAD 5", "ICECREAM 100", "PIZZA 7", "JUICE 10", "WATER 1"]
let in2 = ["x 25", "y 20", "z 1000"]
let m2 = ["AAAA xyxy 15", "TTT yy 30", "BBBB xx 30"]
let sel2 = ["BBBB 3", "TTT 2"]

console.log(solution(in1, m1, sel1))
console.log(solution(in2, m2, sel2))

console.log(solution(in1, m1, sel1) === 1161)
console.log(solution(in2, m2, sel2) === -80)