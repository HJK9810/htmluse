// 여기에 코드를 작성해 주세요.
import {addBtn, addInput, list, rollBtn} from './tags.js';
import addMenu from './add.js';
import deleteMenu from './delete.js';
import rollMenu from './roll.js';


const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
rollBtn.addEventListener('click', () => list.classList.contains('rolling') || rollMenu(data));