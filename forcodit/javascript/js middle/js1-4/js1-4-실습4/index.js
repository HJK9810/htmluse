const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('Success!👏');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

// 여기에 코드를 작성해 주세요.
function deleteWord() {
  // input된 값을 가진 data-word값 찾기
  const word = document.querySelector(`[data-word = "${input.value}"] `);
  // 해당 값의 존재여부 확인
  if(word) {
    word.remove();
    checker();
  }
  // 입력된 내용을 지우며 빈칸으로 만들기
  input.value = '';
}

input.addEventListener('change', deleteWord);