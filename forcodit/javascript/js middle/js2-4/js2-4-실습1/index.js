// 여기에 코드를 작성해 주세요.
import {addMenu} from './add.js';
import {deleteMenuByIndex as deleteMenu} from './delete.js';
import {addBtn, addInput, list} from './tags.js';


const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
