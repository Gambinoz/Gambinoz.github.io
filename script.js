const cells = document.querySelectorAll('[data-cell]');
const currentPlayerDisplay = document.getElementById('current-player');
const resetButton = document.getElementById('reset');
let currentPlayer = 'Elon Musk';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = () => {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            cells[a].classList.add('winner');
            cells[b].classList.add('winner');
            cells[c].classList.add('winner');
            currentPlayerDisplay.textContent = '';
          
            // Muestra la imagen
            const winnerImageContainer = document.getElementById('winner-image-container');
            winnerImageContainer.style.display = 'block';
          
            // Pausa durante unos segundos para que se pueda ver la imagen
            setTimeout(function () {
              winnerImageContainer.style.display = 'none'; // Oculta la imagen
              alert(`¡${gameBoard[a]} gana!`);
            }, 1000); // Cambia 2000 por la duración en milisegundos que desees
          }
    }
    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        currentPlayerDisplay.textContent = '';
      
        // Muestra la imagen de empate
        const winnerImageContainer = document.getElementById('winner-image-container');
        winnerImageContainer.style.display = 'block';
      
        // Pausa durante unos segundos para que se pueda ver la imagen
        setTimeout(function () {
          winnerImageContainer.style.display = 'none'; // Oculta la imagen de empate
          alert('¡Empate!');
        }, 1000); // Cambia 2000 por la duración en milisegundos que desees
      }
      
      
};

const handleCellClick = (e) => {
    const cell = e.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.style.backgroundImage = `url(${currentPlayer === 'Elon Musk' ? 'https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg' : 'https://play-lh.googleusercontent.com/G6jK9S77RN0laf9_6nhDo3AVxbRP9SgMmt8ZmQjKQ2hibn9xhOY-W5YFn_7stJD1CA'})`;

        checkWin();

        if (gameActive) {
            currentPlayer = currentPlayer === 'Elon Musk' ? 'Mark Zuckerberg' : 'Elon Musk';
            currentPlayerDisplay.textContent = currentPlayer;
        }
    }
};

const handleResetClick = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'Elon Musk';
    currentPlayerDisplay.textContent = currentPlayer;

    cells.forEach(cell => {
        cell.style.backgroundImage = 'none';
        cell.classList.remove('winner');
    });
};

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', handleResetClick);
