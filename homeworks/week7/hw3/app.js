const input = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');

input.addEventListener('keypress', function (e) {
  const value = this.value.trim();
  if (e.keyCode === 13 && value) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
      <span class="todo-delete"></span>
      ${value}
    `;
    list.appendChild(li);
    this.value = '';
  }
});

list.addEventListener('click', function (e) {
  // toggle complete
  if (e.target.classList.contains('todo-item')) {
    e.target.classList.toggle('complete');
  }

  // delete
  if (e.target.classList.contains('todo-delete')) {
    e.target.parentNode.remove();
  }
});
