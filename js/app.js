const gameBoard = document.getElementById("gameBoard")



//let winners = []
let player1Selection = []
let player2Selection = []
let currentPlayer = "player1"
// let points1 = 0
// let points = 0

// event.target is what is going to be clicked(pokersquare game)
//gameBoard.addEventListener('click', changeTurn) 

function changeTurn(e) {
    //console.log(e)
    let id = e.target.id
    //console.log(id)
    e.target.removeEventListener('click',changeTurn)
    if (currentPlayer === "player1") {
        player1Selection.push(id)
        console.log(player1Selection)
        e.target.style.backgroundColor = "black"
        currentPlayer = "player2"
    } else if (currentPlayer === "player2") {        
        player2Selection.push(id)
        console.log(player2Selection)
        e.target.style.backgroundColor = "red"
        currentPlayer = "player1"
    }
    
    // console.log(currentPlayer)
}

function addEventListeners() {
    let squares = document.getElementsByClassName("grid")
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', changeTurn)
    }
}
function removeEventListeners() {
    let squares = document.getElementsByClassName("grid")
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', changeTurn)
    }
}
addEventListeners()

function checkForWins(square, player){
    let possibleWins = [
        ["row-1","row-2","row-3"], 
        ["row-2","row-3","row-4"],
        ["row-4","row-5","row-6"],
        ["row-3","row-4","row-5"],
    ]
    
}



// event.target is what is going to be clicked(pokersquare game)












