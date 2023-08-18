function upgradeGridLabel(){
  gridLabel.textContent = 'Grid Size: ' + gridSize.value;
}

function upgradeGridSize(){
  gridContainer.innerHTML = '';
  for(let i = 0; i < gridSize.value; i++){
    let gridCol = document.createElement('div');
    gridCol.classList.add('col');
    gridContainer.appendChild(gridCol);

    for(let j = 0; j < gridSize.value; j++){
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('row');
      gridCol.appendChild(gridSquare);
    }
  }
}

const gridContainer = document.getElementById('grid');
const gridSize = document.getElementById('grid-size');
const gridLabel = document.getElementById('size-label');

gridSize.addEventListener('mousemove', upgradeGridLabel);
gridSize.addEventListener('change', upgradeGridSize);
