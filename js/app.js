let gameBoard = document.getElementById("gameBoard")

let winners = []
let player1Selection = []
let player2Selection = []
let currentPlayer = 0
let points1 = 0
let points = 0
let size = (7 * 6)

gameBoard.addEventListener('click', boxClick) 

function boxClick(e) {
let changeTurn = Array.from(gameBoard)
let index = changeTurn.indexOf(e.target)
console.log(index)

}




// Need to show player1 turn then player2's turn.
//show the switches
// function changeTurn(){
// if(player1Selection ===){

// }
// }







