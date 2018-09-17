console.log("javascript running");

/*------------------------ constants ------------------------*/


/*------------------------ apps state (variables) ------------------------*/
var gameBoard = document.getElementById("gameBoard");
// var gameBoardCell = document.getElementsByClassName("gameBoardCell");
var resetBtn = document.querySelector("button");
var preventMove;
var whosTurn;
var turnCount;
var clickedItem;
// var globalClickedItem;
var body;
var cellPlayed;

/*------------------------ cached element references ------------------------*/



/*----------------------------- functions -----------------------------*/
// Make your move
// function makeMove() {
//       gameBoard.onclick = function() {
//             gameBoardCell.classList.add("x");
//       };
// }

//this sets aa click listener for the parent element of the game board. I then created a function named "gameBoardCell"
gameBoard.addEventListener("click", gameBoardCell, false);
//This function grabs the children elements of gameBoard and sets click listeners for all of them using propagation
function gameBoardCell(e) {
      if (e.target !== e.currentTarget) {
            clickedItem = e.target.id;
            console.log("Hello " + clickedItem);
            globalClickedItem = clickedItem;
      }
      e.target.classList.add("x");
      // e.stopPropagation();
      // alert(clickedItem);
}

console.log("Hello " + clickedItem);

// function whosTurn() {
//       if ()
// }





// Reset Button Logic
function resetGame() {
      // If reset button pressed
      var cells = document.getElementsByClassName("gameBoardCell");
            for (let cell of cells) {
                  cell.classList.remove("x");
                  cell.classList.remove("o"); 
            }
            // clear gameboard

      
}

// // Initialize Game
      function initGame() {
            //   initialize variables
            cellAvailable = []
            cellPlayed = {
                  box1: false,
                  box2: false,
                  box3: false,
                  box4: false,
                  box5: false,
                  box6: false,
                  box7: false,
                  box8: false,
                  box9: false
            }
      }

document.addEventListener("DOMContentLoaded", function() {
      console.log("DOM loaded");
      body = document.body;
      resetBtn.addEventListener("click", resetGame);
      // gameStatus = document.querySelector("h2");
      // whosTurn = document.querySelector("h3");
      // initGame();
      });



/*------------------------ event listeners ------------------------*/




// ----------------------------------------Extras-----------------------------

// // Player Won Game

// function playerWon() {
//       // If player won game, draw line through winning move
//       // Show text displaying that player won
// }

// Player Lost Game
// Player Tied Game
// Check for gameBoard already occupied //
// var winningCombinations = [
//       "box1, box2, box3",
//       "box4, box5, box6",
//       "box7, box8, box9",
//       "box1, box4, box7",
//       "box2, box5, box8",
//       "box3, box6, box9",
//       "box1, box5, box9",
//       "box7, box5, box3"
// ];

// var gameStatus;
// var winner;
// var loser;
// var xWins;
// var oWins;



// Display an empty tic-tac-toe board when the page is initially displayed.

// A player can click on the nine cells to make a move.

// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.