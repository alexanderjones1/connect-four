/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/

const circleEls = document.querySelectorAll('.cir')
const messageEl = document.getElementById('message')



/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/

init()
function init() {
    board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    render()
}

function render () {
    
}