function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}


function getMoveName(argMoveId) {
	if (argMoveId == '1') {
		return 'kamień';
	} else if (argMoveId == '2') {
		return 'papier';
	} else if (argMoveId == '3') {
		return 'nożyce';
	} else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
}

function displayResult(pcMove, playerMove) {
	printMessage('Komputer zagrał ' + pcMove + ', a Ty ' + playerMove);

	if ((playerMove === 'papier' && pcMove === 'kamień') || (playerMove === 'kamień' && pcMove === 'nożyce') || (playerMove === 'nożyce' && pcMove === 'papier')) { // win
		printMessage(`Wygrałeś!`)
	} else if ((playerMove === 'kamień' && pcMove === 'papier') || (playerMove === 'nożyce' && pcMove === 'kamień') || (playerMove === 'papier' && pcMove === 'nożyce')) { // failure
		printMessage(`Przegałeś!`)
	} else if((playerMove === 'kamień' && pcMove === 'kamień') || (playerMove === 'nożyce' && pcMove === 'nożyce') || (playerMove === 'papier' && pcMove === 'papier')){
		printMessage(`Remis! `)
	} else {
		printMessage('Błedne dane, mecz nie rozegrany :(');
	}


}


function playGame(playerInput) {
    clearMessages();

    let playerMove = getMoveName(playerInput);

    const moves = ['papier', 'kamień', 'nożyce'];
    const pcMoveIndex = Math.floor(Math.random() * 3)
    const pcMove = moves[pcMoveIndex];

    displayResult(pcMove, playerMove)
}

