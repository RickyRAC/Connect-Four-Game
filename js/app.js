const gameBoard = document.getElementById("gameBoard")



//let winners = []
//let player1Selection = 'blackDisc'
//let player2Selection = 'redDisc'
 let currentPlayer = "player1"
// let points1 = 0
// let points = 0

// event.target is what is going to be clicked(pokersquare game)
gameBoard.addEventListener('click', changeTurn) 

function changeTurn(){
    if (currentPlayer === "player1"){
        currentPlayer = "player2"
    } else if (currentPlayer === "player2") { 
        currentPlayer = "player1"
    }
    console.log(currentPlayer)
    }












