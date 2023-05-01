const button = document.querySelector('button.btn');
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

button.addEventListener('click', function(){
    squareNumber = prompt('Enter number of squares');
    container.innerHTML = '';
    createBox(squareNumber);
})

function squareBox(number) {
    const squareBox = document.createElement('div');
        squareBox.classList.add('square-box');
        let square = Math.sqrt(number);
        squareBox.style.width = `calc(100% * (1 / ${square}) - 2px)`;
        squareBox.style.height = `calc(100% * (1 / ${square}) - 2px)`;
        container.appendChild(squareBox);
}

function createBox(number) {
    container.style.visibility = 'visible';
    for (let i = 0; i<number; i++) {
        squareBox(number);
    }
}