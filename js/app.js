let gameBoard = document.getElementById("gameBoard")

let player1 = []
let player2 = []

let turns = 0

gameBoard.addEventListener('click', boxClick) 

function boxClick(e)