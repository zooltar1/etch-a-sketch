const container = document.querySelector('div.container');

function createBox(number) {
    for (let i = 0; i<number; i++) {
        const squareBox = document.createElement('div');
        squareBox.classList.add('square-box');
        container.appendChild(squareBox);
    }
}

createBox(67);


