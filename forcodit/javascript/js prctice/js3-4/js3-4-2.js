// 거스름돈 지폐구하기 - 5만원, 만원, 5천원, 천원

function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  const CHANGE_MONEY = [5e4, 1e4, 5e3, 1e3];
  let charge = payment - cost;

  for (let i = 0; i < CHANGE_MONEY.length; i++) {
    console.log(`${CHANGE_MONEY[i]}원 지폐: ${Math.floor(charge / CHANGE_MONEY[i])}장`);
    charge %= CHANGE_MONEY[i];
  }
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);