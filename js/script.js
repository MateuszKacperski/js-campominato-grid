console.log('JS OK');

// recupero il bottone
const button = document.querySelector('.btn');

// recupero la griglia

const grid = document.getElementById('grid');


//funzioni

function createCell () {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cell;
    return cell;
}


const addNumber = number => number + 1




// righe e celle

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Variabile di conteggio usata per impedire di azionare il bottone piu volte
let count = 0;

// aggiungo azione dopo aver cliccato sul bottone

button.addEventListener('click', function(e){

    e.preventDefault();
    count++
    if(count === 1){

        // creo celle
    for(let i = 0; i < totalCells; i++){

        // creo cella nel html 
        const cell = createCell();
        cell.className = 'cell';

        //Inserisco il numero all'interno della cella
        const numero = addNumber(i);
        cell.innerText = numero;

        cell.addEventListener('click', function(){
            cell.classList.toggle('clicked');
            console.log(numero);
        })


        grid.appendChild(cell);
    }
    }


})


