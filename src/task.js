import completeTask from './complete.js';

class TaskFunctions {
  constructor() {
    this.storage = JSON.parse(localStorage.getItem('to-do-list')) || [];
  }

  showtasks() {
    const taskbody = document.querySelector('.to-dos');
    taskbody.innerHTML = '';
    this.storage.forEach((task) => {
      if (task.completed) {
        taskbody.innerHTML += `
            <div id='${task.index}'class='task'>
              <input type='checkbox' class='checkbox' checked>
              <input type='text' class='task-input' value='${task.description}' style='text-decoration:line-through'>
              <button class='trash'>
                <i class='fa-solid fa-trash-can'></i>
              </button>
            </div>
            `;
      } else {
        taskbody.innerHTML += `
            <div id='${task.index}'class='task'>
              <input type='checkbox' class='checkbox'>
              <input type='text' class='task-input' value='${task.description}'>
              <button class='trash'>
                <i class='fa-solid fa-trash-can'></i>
              </button>
            </div>
            `;
      }
    });

    const deleteBtn = document.querySelectorAll('.trash');
    deleteBtn.forEach((button) => {
      button.addEventListener('click', () => {
        this.removeTask(button.parentElement.id);
      });
    });

    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((box) => {
      box.addEventListener('change', () => {
        completeTask(box);
        this.updateStatus(box.parentElement.id);
      });
    });

    const inputField = document.querySelectorAll('.task-input');
    inputField.forEach((field) => {
      field.addEventListener('input', () => {
        this.updateTaskInput(field.parentElement.id, field.value);
      });
    });

    localStorage.setItem('to-do-list', JSON.stringify(this.storage));
  }

  resetTasks() {
    let index = 1;
    this.storage.forEach((task) => {
      task.index = index;
      index += 1;
    });
  }

  removeTask(index) {
    this.storage = this.storage.filter((task) => task.index !== +index);
    this.resetTasks();
    this.showtasks();
    localStorage.setItem('to-do-list', JSON.stringify(this.storage));
  }

  displayLocalStorage() {
    if (localStorage !== null) {
      this.storage = JSON.parse(localStorage.getItem('to-do-list')) || [];
      this.showtasks();
    }
  }

  addNewTask(task) {
    const newTask = {
      index: this.storage.length + 1,
      description: task,
      completed: false,
    };
    this.storage.push(newTask);
    localStorage.setItem('to-do-list', JSON.stringify(this.storage));
    this.showtasks();
  }

  updateStatus(index) {
    if (this.storage[+index - 1].completed) {
      this.storage[+index - 1].completed = false;
    } else {
      this.storage[+index - 1].completed = true;
    }
    localStorage.setItem('to-do-list', JSON.stringify(this.storage));
  }

  clearCompleted() {
    this.storage = this.storage.filter((task) => task.completed === false);
    this.resetTasks();
    localStorage.setItem('to-do-list', JSON.stringify(this.storage));
    console.log(this.storage);
    this.showtasks();
  }

  updateTaskInput(index, value) {
    this.storage[+index - 1].description = value;
    localStorage.setItem('to-do-list', JSON.stringify(this.storage));
  }
}

export default TaskFunctions;
