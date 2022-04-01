import './style.css';

const listSection = [
  {
    index: 0,
    description: 'wash the dish',
    completed: false,
  },
  {
    index: 1,
    description: 'complete to do list project',
    completed: false,
  },
];

const displayContent = () => {
  const tasks = document.querySelector('#listSection');
  listSection.forEach((element) => {
    tasks.innerHTML += `
          <div class="border-bottom  m-0 px-3 py-0 d-flex align-items-center justify-content-between">
            <div class="form-check mb-0 d-flex align-items-center justify-content-start">
              <input class="form-check-input border" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label p-3 m-0" for="flexCheckDefault">
                <span class="h5 m-0 p-0">${element.description}</span>
              </label>
            </div>
            <button id="three-dots" class="h5 btn m-0 icon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <button id="trash" class="h5 btn m-0 icon hide">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `;
  });
};

displayContent();
