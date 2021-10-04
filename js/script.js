const moves = ['paper', 'stone', 'scissors']
const btnWithPaper = document.querySelector('#paper-btn')
const btnWithStone = document.querySelector('#stone-btn')
const btnWithScissors = document.querySelector('#scissors-btn')

document.addEventListener('DOMContentLoaded', () => {



    const callBack = (e) => {
        const type = e.target.getAttribute('data-type');
        const pcMoveIndex = Math.floor(Math.random() * 3)
        const pcMove = moves[pcMoveIndex];

        clearMessages()

        if ((type === 'paper' && pcMove === 'stone') || (type === 'stone' && pcMove === 'scissors') || (type === 'scissors' && pcMove === 'paper')) { // win
            printMessage(`You win! Your move - ${type}, PC move - ${pcMove}`)
        } else if ((type === 'stone' && pcMove === 'paper') || (type === 'scissors' && pcMove === 'stone') || (type === 'paper' && pcMove === 'scissors')) { // failure
            printMessage(`You lost! Your move - ${type}, PC move - ${pcMove}`)
        } else {
            printMessage(`It wos a draw! Your move - ${type}, PC move - ${pcMove}`)
        } // 
    }
    btnWithPaper.addEventListener('click', callBack)
    btnWithStone.addEventListener('click', callBack)
    btnWithScissors.addEventListener('click', callBack)



})


