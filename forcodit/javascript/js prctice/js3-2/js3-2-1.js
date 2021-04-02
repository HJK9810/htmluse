let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// 여기에 코드를 작성해 주세요.
for (let i = 0; i < dataType.length; i++) {
  console.log(dataType[i]);
}

console.log('\n\n');

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성해 주세요.
for (let i = 0; i < celsiusTemps.length; i++) {
  let C = celsiusTemps[i];
  fahrenheitTemps[i] = (C * 9 / 5) + 32;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);