import './style.css';
import TaskFunctions from './task.js';

const task = new TaskFunctions();
task.displayLocalStorage();

const submit = () => {
  const inputField = document.querySelector('.field-input');
  inputField.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      task.addNewTask(inputField.value);
    }
  });
};

submit();

const clearCompleteBtn = document.querySelector('.button');
clearCompleteBtn.addEventListener('click', () => {
  task.clearCompleted();
});
