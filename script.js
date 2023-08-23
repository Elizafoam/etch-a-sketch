function setGrid(){
  const gridSquares = document.querySelectorAll('.row');
  gridSquares.forEach(gridSquare => gridSquare.addEventListener('click', (e) => {
    let penColor = getMode();
    paintSquare(e, penColor);
  }));
}

function setGridLabel(){
  gridLabel.textContent = 'Grid Size: ' + gridSize.value;
}

function setGridSize(){
  gridContainer.innerHTML = '';
  for(let i = 0; i < gridSize.value; i++){
    let gridCol = document.createElement('div');
    gridCol.classList.add('col');
    gridContainer.appendChild(gridCol);

    for(let j = 0; j < gridSize.value; j++){
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('row');
      gridSquare.addEventListener('click', (e) => {
        let penColor = getMode();
        paintSquare(e, penColor);
      });
      gridCol.appendChild(gridSquare);
    }
  }
}

function setBackgroundColor(){
  gridContainer.style.backgroundColor = backgroundPicker.value;
}

function paintSquare(e, penColor){
  e.target.style.backgroundColor = penPicker.value;
}

function randomColor(){
  let colorValue = Math.floor(Math.random()*255).toString(16);
  return colorValue.length === 1 ? '0' + colorValue : colorValue;
}

function getMode(){
  let mode = document.querySelector('.selected').getAttribute('id'); 
  let penColor = penPicker.value;
  switch(mode){
    case 'color':
      penColor === backgroundPicker.value ? penPicker.value = '#363636' : penPicker.value = penColor;
      break;
    case 'random':
      penPicker.value = `#${randomColor()}${randomColor()}${randomColor()}`;
      break;
    case 'eraser':
      penPicker.value = backgroundPicker.value;
      break;
  
  }
  return penColor;
}

const gridContainer = document.getElementById('grid');
const gridSize = document.getElementById('grid-size');
const gridLabel = document.getElementById('size-label');

gridSize.addEventListener('mousemove', setGridLabel);
gridSize.addEventListener('change', setGridSize);

const penPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');

backgroundPicker.addEventListener('change', setBackgroundColor);

// Buttons
const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => button.addEventListener('click', () => {
  document.querySelector('.selected').classList.remove('selected');
  button.classList.toggle('selected');
}));

const colorButton = document.getElementById('color');
const randomButton = document.getElementById('random');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', setGridSize)


setGrid();