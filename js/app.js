const gameBoard = document.getElementById("gameBoard")



//let winners = true
let player1Selection = []
let player2Selection = []
let currentPlayer = "player1"
// let points1 = 0
// let points = 0

let row1 = document.querySelector("#row-1")
let row2 = document.querySelector("#row-2")
let row3 = document.querySelector("#row-3")
let row4 = document.querySelector("#row-4")
let row5 = document.querySelector("#row-5")
let row6 = document.querySelector("#row-6")
let row7 = document.querySelector("#row-7")


// let rowA = document.querySelector("#row-1")
// let rowB = document.querySelector("#row-2")
// let rowC = document.querySelector("#row-3")
// let rowD = document.querySelector("#row-4")
// let rowE = document.querySelector("#row-5")
// let rowF = document.querySelector("#row-6")
// let rowG = document.querySelector("#row-7")

 

// event.target is what is going to be clicked(pokersquare game)
//gameBoard.addEventListener('click', changeTurn) 

function changeTurn(e) {
    //console.log(e)
    let id = e.target.id
    //console.log(id)
    // show how player1 wins by
    e.target.removeEventListener('click',changeTurn)
    if (currentPlayer === "player1") {
        player1Selection.push(id)
        e.target.style.backgroundColor = "black"
        // explain 3 boxes in a row to win.
        // player1 === [1,2,3]
         if(row1.style.backgroundColor === "black" &&  row2.style.backgroundColor === "black" && row3.style.backgroundColor === "black"){
            {alert('Player1 Win!')}
        } else if (row2.style.backgroundColor === "black" &&  row3.style.backgroundColor === "black" && row4.style.backgroundColor === "black"){
            {alert('Player1 Win!')}
        } else if (row3.style.backgroundColor === "black" &&  row4.style.backgroundColor === "black" && row5.style.backgroundColor === "black"){
            {alert('Player1 Win!')}
        } else if (row4.style.backgroundColor === "black" &&  row5.style.backgroundColor === "black" && row6.style.backgroundColor === "black"){
            {alert('Player1 Win!')}
        } else if (row5.style.backgroundColor === "black" &&  row6.style.backgroundColor === "black" && row7.style.backgroundColor === "black"){
            {alert('Player1 Win!')}
        } 
        currentPlayer = "player2"
    } else if (currentPlayer === "player2") {        
        player2Selection.push(id)
        e.target.style.backgroundColor = "red"
        if(row1.style.backgroundColor === "red" &&  row2.style.backgroundColor === "red" && row3.style.backgroundColor === "red"){
            {alert('Player2 Win!')}
           } else if (row2.style.backgroundColor === "red" &&  row3.style.backgroundColor === "red" && row4.style.backgroundColor === "red"){
            {alert('Player2 Win!')}
           } else if (row3.style.backgroundColor === "red" &&  row4.style.backgroundColor === "red" && row5.style.backgroundColor === "red"){
            {alert('Player2 Win!')}
           } else if (row4.style.backgroundColor === "red" &&  row5.style.backgroundColor === "red" && row6.style.backgroundColor === "red"){
            {alert('Player2 Win!')}
           } else if (row5.style.backgroundColor === "red" &&  row6.style.backgroundColor === "red" && row7.style.backgroundColor === "red"){
            {alert('Player2 Win!')}
           } 
     currentPlayer = "player1"
    } 
    
    //checkForWins(player1Selection)
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
    console.log("checkingForWins")
    let possibleWins = [
        [row1,row2,row3], 
        [row2,row3,row4],
        [row3,row4,row5],
        [row4,row5,row6],
        [row5,row6,row7],] 

    for(let i = 0; i < possibleWins.length; i++){
        if (player1Selection === possibleWins[i]) {
        document.getElementById("print").innerText = "Player1 is the Winner"
         } else if (player2Selection === possibleWins[i]) {
            document.getElementById("print").innerText = "Player2 is the Winner"
         }
    
} 
}
    //  For(i = 0; i < possibleWins.length; i ++){
    //     if(currentPlayer. === row1 || row3)
    //     console.log(row1)
    //     //e.target.style.backgroundColor = "red"
    //     //currentPlayer = "player1"
    //    For(j = 0; j < possibleWins[i].length; j ++){

   // }
//}




// playersSelction and player2Selection check possible wins
    // if player1Selection or player2Selection is inside possibleWins then display winner.    

