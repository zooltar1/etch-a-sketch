const container = document.querySelector('div.container');

function createBox(number) {
    for (let i = 0; i<number; i++) {
        const squareBox = document.createElement('div');
        squareBox.classList.add('square-box');
        let square = Math.sqrt(number); // pierwiastek z liczby
        squareBox.style.width = `calc(100% * (1 / ${square}) - 2px)`;
        squareBox.style.height = `calc(100% * (1 / ${square}) - 2px)`;
        container.appendChild(squareBox); 
    }
}

createBox(49);


