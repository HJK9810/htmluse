const list = document.querySelector('.list');

function reloadMenu(data) {
  list.innerHTML = '';

  data.forEach((title, index) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<b>${index + 1}</b>${title}<button class="del-btn" data-index="${index}">x</div>`;
    list.append(li);
  });
}

export function deleteMenuByIndex(data, index) {
  data.splice(index, 1);
  reloadMenu(data);
};
