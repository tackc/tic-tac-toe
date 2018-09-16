console.log("javascript running");

/*------------------------ constants ------------------------*/
  

/*------------------------ app's state (variables) ------------------------*/


// var gameBoard;
var position;
var gameStatus;
var resetBtn;
var winner;
var loser;
var preventMove;
var whosTurn;

var winningCombinations = [
      "box1, box2, box3",
      "box4, box5, box6",
      "box7, box8, box9",
      "box1, box4, box7",
      "box2, box5, box8",
      "box3, box6, box9",
      "box1, box5, box9",
      "box7, box5, box3",
]

var xWins;
var oWins;




/*------------------------ cached element references ------------------------*/



/*----------------------------- functions -----------------------------*/
// Make your move
function makeMove() {
      gameBoard.onclick = function() {
            this.classList.add("x");
      }
} 


// Player Won Game
function whosTurn() {

}

function playerWon() {
      // If player won game, draw line through winning move
      // Show text displaying that player won
}


// Player Lost Game

// Begin "New Game"
function newGame () {
      // Remove class that contains "you won, you lost, or you tied" text
      // Reset game board
}

// Initialize Game
      function initGame() {
            //   initialize variables
            position = [];
}

document.addEventListener("DOMContentLoaded", function() {
      console.log("DOM loaded");
      body = document.body;
      
      var gameBoard = document.getElementById('gameBoard').children;
      
      gameStatus = document.querySelector('h2');
      resetBtn = document.querySelector('button');
      whosTurn = document.querySelector('h3');
      
      position = document.getElementsByClassName('position');

      initGame();
      });



/*------------------------ event listeners ------------------------*/
gameBoard.addEventListener('click', position);
      // for (let position of gameBoard) {
      //       gameBoard.addEventListener('click', move);
      // }

resetBtn.addEventListener('click', reset);

// Player Tied Game


// Reset Game

// Randomly Select place to play
// for (let wire in wiresCut) {
//       wiresCut[wire]
//       var rand = Math.random();
//       if (rand > 0.5) {
//         wiresToCut.push(wire);
//       }
//     }

// Check for gameBoard already occupied //




// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.