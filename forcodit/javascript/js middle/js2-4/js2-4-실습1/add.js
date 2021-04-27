const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');

function add(data) {
  const inputValue = addInput.value;
  const index = data.length;

  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = `<b>${index + 1}</b>${inputValue}<button class="del-btn" data-index="${index}">x</div>`;
  list.append(li);

  data.push(inputValue);

  addInput.value = '';
  addInput.focus();
}

function emptyAlert() {
  alert('고민되는 메뉴를 입력해 주세요.');
  addInput.focus();
}

function maxAlert() {
  alert('메뉴는 최대 5개까지만 고민할 수 있습니다.');
  addInput.value = '';
}

// 아래 코드를 수정해 주세요.
export function addMenu(data) {
  const inputValue = addInput.value;

  if (inputValue === '') {
    emptyAlert();
  } else if (data.length > 4) {
    maxAlert();
  } else {
    add(data);
  }
}
