const button = document.querySelector('button.btn');
button.addEventListener('click', function(){
    squareNumber = prompt('Enter number of squares');
    createBox(squareNumber);
})

function createBox(number) {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    container.style.visibility = 'visible';
    for (let i = 0; i<number; i++) {
        const squareBox = document.createElement('div');
        squareBox.classList.add('square-box');
        let square = Math.sqrt(number);
        squareBox.style.width = `calc(100% * (1 / ${square}) - 2px)`;
        squareBox.style.height = `calc(100% * (1 / ${square}) - 2px)`;
        container.appendChild(squareBox);
        squareBox.addEventListener('mouseover', function() {
            squareBox.style.backgroundColor = 'green';
        });
    }
}



