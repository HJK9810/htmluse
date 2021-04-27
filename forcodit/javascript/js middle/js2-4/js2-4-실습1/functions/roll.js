import { addInput, list, rollBtn } from '../tags.js';

function selectMenu(data) {
  list.classList.remove('rolling');
  list.innerHTML = '';

  const selectedIndex = (Math.floor(Math.random() * data.length));

  const li = document.createElement('li');
  li.classList.add('item', 'selected');
  li.innerHTML = `<b>${selectedIndex + 1}</b>${data[selectedIndex]}`;
  list.append(li);

  rollBtn.textContent = 'Clear';
}

function minAlert() {
  alert('최소 1개 이상의 메뉴를 입력해 주세요.');
  addInput.focus();
}

function clearMenu(data) {
  data.splice(0);
  list.innerHTML = '';
  rollBtn.textContent = 'Roll';
}

function rollMenu(data) {
  if (data.length === 0) {
    minAlert();
  } else if (rollBtn.textContent === 'Clear') {
    clearMenu(data);
  } else {
    list.classList.add('rolling');
    setTimeout(() => selectMenu(data), 1200);
  }
}

// 여기에 코드를 작성해 주세요.
export default rollMenu;