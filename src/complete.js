const completeTask = (box) => {
  if (box.checked) {
    box.nextElementSibling.style.textDecoration = 'line-through';
  } else {
    box.nextElementSibling.style.textDecoration = 'none';
  }
};
export default completeTask;
