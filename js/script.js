let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

const moves = ['papier', 'kamień', 'nożyce'];
const pcMoveIndex = Math.floor(Math.random() * 3) 
const pcMove = moves[pcMoveIndex];

printMessage('Ruch komputera to: ' + pcMove);

if ((playerMove === 'papier' && pcMove === 'kamień') || (playerMove === 'kamień' && pcMove === 'nożyce') || (playerMove === 'nożyce' && pcMove === 'papier')) { // win
    printMessage(`ty wygrałeś! twój ruch - ${playerMove}, ruch komputera - ${pcMove}`)
} else if ((playerMove === 'kamień' && pcMove === 'papier') || (playerMove === 'nożyce' && pcMove === 'kamień') || (playerMove === 'papier' && pcMove === 'scissors')) { // failure
    printMessage(`ty przegałeś! twój ruch - ${playerMove}, ruch komputera - ${pcMove}`)
} else {
    printMessage(`remis! twój ruch to - ${playerMove}, ruch komputera - ${pcMove}`)
} 





