const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.
function makelist() {
  data.forEach((work, i) => {
    // 요소 추가는 document!!!
    const newli = document.createElement('li');

    if(work.isClear) {
      newli.classList.add('item', 'done');
    } else {
      newli.classList.add('item');
    }

    newli.textContent = `${i+1}. ${work.title}`;

    list.appendChild(newli);
  });
}

makelist();