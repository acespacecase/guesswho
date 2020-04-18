document.addEventListener("DOMContentLoaded", initialize);

let photoIndex = 1;
let randomArray = [];

function initialize() {
  randomArray = randomizePhotoArray();
  loadGrid();
  setChosenPerson();
}

function loadGrid() {
  let fragment = document.createDocumentFragment();

  // create 4 rows of 6
  for (var i = 1; i <= 4; i++) {
    let row = document.createElement('div');
    row.classList = `row row-${i}`;
    row.appendChild(createRow());
    fragment.appendChild(row);
  }
  
  let grid = document.getElementById('grid');

  grid.appendChild(fragment);
}

function createRow(length = 6) {
  let fragment = document.createDocumentFragment();

  for (var i = 1; i <= 6; i++) {
    let tile = document.createElement('div');
    let index = randomArray[photoIndex - 1];

    // styles
    tile.classList = `tile tile-${i}`;
    tile.id = index;
    tile.style.backgroundImage = `url('./images/${index}.jpg')`;

    // event listeners
    tile.addEventListener('click', toggleImage);

    fragment.appendChild(tile);
    photoIndex++
  }

  return fragment;
}

function toggleImage(event) {
  if (event.target.style.backgroundImage == "none") {
    let index = event.target.id;
    event.target.style.backgroundImage = `url('./images/${index}.jpg')`;
  } else {
    event.target.style.backgroundImage = "none";
  }
}

function setChosenPerson() {
  let myPerson = document.getElementById('my-person');
  let randomPhotoIndex = Math.ceil(Math.random() * 24);
  myPerson.style.backgroundImage = `url('./images/${randomPhotoIndex}.jpg')`;
}

function randomizePhotoArray() {
  let randomArray = [];
  let runs = 0;

  while (randomArray.length < 24) {
    let currentRandomIndex = Math.ceil(Math.random() * 24);

    if (!randomArray.includes(currentRandomIndex)) {
      randomArray.push(currentRandomIndex);
    }

    runs++;
  }
  console.log(runs);
  console.log(randomArray);

  return randomArray;
}