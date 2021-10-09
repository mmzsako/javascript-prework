const btnWithPaper = document.querySelector('#paper-btn')
const btnWithStone = document.querySelector('#stone-btn')
const btnWithScissors = document.querySelector('#scissors-btn')


btnWithPaper.addEventListener('click', () => {
    playGame("2")
})
btnWithStone.addEventListener('click', () => {
    playGame("1")
})
btnWithScissors.addEventListener('click', () =>{
    playGame("3")
})


