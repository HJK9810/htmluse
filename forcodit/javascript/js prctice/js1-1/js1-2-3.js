// 함수 선언
/**
 * function 함수이름 () {
 * 명령; 
 * 명령;
 * };
 */

// function greethings() {
//   console.log('Hi');
//   console.log('안녕');
//   console.log('Guten Tag');
//   console.log('Bonjour');
//   console.log('Buongiorno');
// };

// greethings();

// Parameter : 매개변수
/**
 * functon 함수이름 (파라미터) {
 *  console.log(파라미터);
 * };
 */

function greethings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
  console.log(sentence);
};

greethings('Hola');

function welcome(name) {
  console.log('안녕하세요 ' + name + '님!');
};

welcome('코드잇');
welcome('Mr. J');

function printSquare(x) {
  console.log(x * x);
};

printSquare(2);
printSquare(5);
printSquare(6);