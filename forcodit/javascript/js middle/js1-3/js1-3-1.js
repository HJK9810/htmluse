const main = document.querySelector('#main');
const toDoList = main.lastElementChild;

function printCurrentTarget(event) {
  console.log(event.currentTarget);
}

main.addEventListener('click', printCurrentTarget);

for (let child of toDoList.children) {
  child.addEventListener('click', printCurrentTarget);
}