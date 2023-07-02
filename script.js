// Variable qui représente le joueur en cours (X ou O)
let currentPlayer = "X";
let gameOver = false;
// Tableau qui représente l'état de la grille
let boardState = ["", "", "", "", "", "", "", "", ""];
let resultDiv = document.getElementById("result");

// Fonction appelée lorsqu'un coup est joué
function makeMove(cellIndex) {
  // Vérifier si la partie est terminée
  if (gameOver) {
    return;
  }

  // Vérifier si la case est vide
  if (boardState[cellIndex] === "") {
    // Mettre à jour l'état de la grille
    boardState[cellIndex] = currentPlayer;

    // Mettre à jour le contenu de la case dans l'interface
    document.getElementById("board").children[cellIndex].innerText = currentPlayer;

    // Vérifier s'il y a un gagnant
    if (checkWinner(currentPlayer)) {
      showResult("Victoire du joueur " + currentPlayer + "!");
      return;
    }

    // Vérifier s'il y a un match nul
    if (boardState.every(cell => cell !== "")) {
      showResult("Match nul !");
      return;
    }

    // Changer de joueur
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    // Appel du coup du robot si ce n'est pas le tour du joueur humain
    if (currentPlayer === "O") {
      robotMove();
    }
  }
}


// Fonction pour vérifier s'il y a un gagnant
function checkWinner(player) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // lignes verticales
    [0, 4, 8], [2, 4, 6] // diagonales
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => boardState[index] === player);
  });
}

function robotMove() {
  let winningMoveIndex = null;
  let blockingMoveIndex = null;

  // Recherche d'une case gagnante pour le robot et d'un coup bloquant pour le joueur
  for (let i = 0; i < boardState.length; i++) {
    if (boardState[i] === "") {
      // Simulation du coup du robot
      boardState[i] = currentPlayer;
      if (checkWinner(currentPlayer)) {
        // Le coup du robot mène à la victoire
        winningMoveIndex = i;
      }
      // Annulation de la simulation
      boardState[i] = "";

      // Simulation du coup du joueur
      boardState[i] = getOpponentPlayer();
      if (checkWinner(getOpponentPlayer())) {
        // Le coup du joueur mène à la victoire
        blockingMoveIndex = i;
      }
      // Annulation de la simulation
      boardState[i] = "";
    }
  }

  // Effectuer le coup gagnant ou bloquant, ou jouer aléatoirement
  if (winningMoveIndex !== null) {
    makeMove(winningMoveIndex);
  } else if (blockingMoveIndex !== null) {
    makeMove(blockingMoveIndex);
  } else {
    // Si aucune case gagnante ou bloquante n'est trouvée, jouer aléatoirement
    let emptyCells = [];
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === "") {
        emptyCells.push(i);
      }
    }

    if (emptyCells.length > 0) {
      let randomIndex = Math.floor(Math.random() * emptyCells.length);
      let selectedCell = emptyCells[randomIndex];
      makeMove(selectedCell);
    }
  }
}

// Fonction pour obtenir le joueur opposé
function getOpponentPlayer() {
  return currentPlayer === "X" ? "O" : "X";
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  // Réinitialiser le contenu des cases dans l'interface
  const cells = document.getElementById("board").children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }

  // Réinitialiser le résultat
  resultDiv.innerText = "";
}


function showResult(message) {
  gameOver = true;

  // Créer une nouvelle div pour afficher le résultat
  
  // Créer un élément de paragraphe pour afficher le message
  const messageElement = document.createElement("p");
  messageElement.innerText = message;
  
  // Créer un bouton pour réinitialiser la partie
  const resetButton = document.createElement("button");
  resetButton.innerText = "Nouvelle partie";
  resetButton.addEventListener("click", resetGame);
  
  // Ajouter le message et le bouton à la div du résultat
  resultDiv.appendChild(messageElement);
  resultDiv.appendChild(resetButton);
  
  // Ajouter la div du résultat à l'élément conteneur de la grille
  const boardContainer = document.getElementById("board-container");
  resultDiv.appendChild(resultDiv);
}