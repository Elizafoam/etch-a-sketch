function setBoard(){
  const gridSquares = document.querySelectorAll('.row');
  gridSquares.forEach(gridSquare => gridSquare.addEventListener('click', (e) => {
    e.target.style.backgroundColor = penPicker.value;
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
        e.target.style.backgroundColor = penPicker.value;
      });
      gridCol.appendChild(gridSquare);
    }
  }
}

function setBackgroundColor(){
  gridContainer.style.backgroundColor = backgroundPicker.value;
}

const gridContainer = document.getElementById('grid');
const gridSize = document.getElementById('grid-size');
const gridLabel = document.getElementById('size-label');

gridSize.addEventListener('mousemove', setGridLabel);
gridSize.addEventListener('change', setGridSize);

const penPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');

backgroundPicker.addEventListener('change', setBackgroundColor);



setBoard();