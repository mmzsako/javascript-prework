let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

const moves = ['papier', 'kamień', 'nożyce'];
const pcMoveIndex = Math.floor(Math.random() * 3) 
const pcMove = moves[pcMoveIndex];

printMessage('Ruch komputera to: ' + pcMove);

displayResult(pcMove, playerMove )

