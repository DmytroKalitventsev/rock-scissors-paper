let player1 = prompt('Player1 Your choice: r - rock, s - scissors, p - paper');
let player2 = prompt('Player2 Your choice: r - rock, s - scissors, p - paper');

let rock = 'r';
let scissors = 's';
let paper = 'p';

let winner = '';
let resultText = '';
let draw = true;
let isCorrect = true;

if (player1 == rock && player2 == scissors || player1 == scissors && player2 == paper || player1 == paper && player2 == rock) {
	winner = 'Player1';
} else if (player2 == rock && player1 == scissors || player2 == scissors && player1 == paper || player2 == paper && player1 == rock) {
	winner = 'Player2';
} else if (player1 == rock && player2 == rock || player1 == scissors && player2 == scissors || player1 == paper && player2 == paper) {
	draw = false;
} else {
	isCorrect = false;
}

if (isCorrect) {
	resultText = 'winner: ' + winner;
	if (!draw) {
		resultText = 'Draw';
	}
} else {
	resultText = 'Is Not Correct'
}

alert(resultText);