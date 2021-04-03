// 팩토리얼 작성 코드.

function factorial(n) {
  let result = 1;
	
	// 여기에 코드를 작성해 주세요.
  for(let i=1;i<=n;i++) {
    result *= i;
  }
	
  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));