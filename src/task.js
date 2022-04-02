class TaskFunctions {
  constructor() {
    this.storage = JSON.parse(localStorage.getItem('to-do-list')) || [];
  }

  showtasks() {
    const taskbody = document.querySelector('.to-dos');
    taskbody.innerHTML = '';
    this.storage.forEach((task) => {
      taskbody.innerHTML += `
            <div id='${task.index}'class='task'>
              <input type='checkbox' class='checkbox'>
              <input type='text' class='task-input' value='${task.description}'>
              <button class='trash'>
                <i class='fa-solid fa-trash-can'></i>
              </button>
            </div>
            `;
    });
    const deleteBtn = document.querySelectorAll('.trash');
    deleteBtn.forEach((button) => {
      button.addEventListener('click', () => {
        this.removeTask(button.parentElement.id);
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
}

export default TaskFunctions;
