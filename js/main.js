console.log("javascript running");

/*------------------------ constants ------------------------*/


/*------------------------ apps state (variables) ------------------------*/
var gameBoard = document.getElementById("gameBoard");
// var gameBoardCell = document.getElementsByClassName("gameBoardCell");
var resetBtn = document.querySelector("button");
var preventMove;
var whosTurn;
var globalClickedItem;

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
            var clickedItem = e.target.id;
            console.log("Hello " + clickedItem);
            globalClickedItem = clickedItem;
      }
      e.stopPropagation();
      alert(clickedItem);
      clickedItem.classList.add("x");
}




//----------------------------I'm hoping I can convert this code so it adds the class of "x" or "o"
// function updateFrom(cell) {
//       var gameBoard = cell.parentNode.querySelector("cell");
//       var value = parseInt(num.textContent, 10);
//       var change = cell.className === "x" ? 1 : -1;
//       num.textContent = value + change;
//   }
  
//   var theParent = document.getElementById("gameBoard");
//   theParent.addEventListener("click", doSomething, false);
   
//   function doSomething(e) {
//       if (e.target.nodeName === "BUTTON") {
//           updateFrom(e.target);
//       }
//   }
//------------------------------------------------------------------------------------------------



// Reset Button Logic
function resetGame() {
      // If reset button pressed
      gameBoard.classList.remove("x");
      gameBoard.classList.remove("o");
      
      // clear gameboard

}

// // Initialize Game
      function initGame() {
            //   initialize variables
            // gameBoardCell = [];
      }

document.addEventListener("DOMContentLoaded", function() {
      console.log("DOM loaded");
      body = document.body;
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