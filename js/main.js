let player1 = prompt('Player1 Your choice: r - rock, s - scissors, p - paper');
let player2 = prompt('Player2 Your choice: r - rock, s - scissors, p - paper');

let rock = 'r';
let scissors = 's';
let paper = 'p';

if (player1 == rock && player2 == scissors || player1 == scissors && player2 == paper || player1 == paper && player2 == rock) {
	if (player1 == rock && player2 == scissors) {
		alert('Player1 Win - rock < scissors');
	}
	if (player1 == scissors && player2 == paper) {
		alert('Player1 Win - scissors < paper');
	}
	if (player1 == paper && player2 == rock) {
		alert('Player1 Win - paper < rock');
	}
} else if (player2 == rock && player1 == scissors || player2 == scissors && player1 == paper || player2 == paper && player1 == rock) {
	if (player2 == rock && player1 == scissors) {
		alert('Player2 Win - rock < scissors');
	}
	if (player2 == scissors && player1 == paper) {
		alert('Player2 Win - scissors < paper');
	}
	if (player2 == paper && player1 == rock) {
		alert('Player2 Win - paper < rock');
	}
} else if (player1 == rock && player2 == rock || player1 == scissors && player2 == scissors || player1 == paper && player2 == paper) {
	if (player1 == rock && player2 == rock) {
		alert('Draw - rock = rock');
	}
	if (player1 == scissors && player2 == scissors) {
		alert('Draw - rock = rock');
	}
	if (player1 == paper && player2 == paper) {
		alert('Draw - paper = paper');
	}
} else if (player1 != rock && player1 != scissors && player1 != paper && player2 != rock && player2 != scissors && player2 != paper) {
	alert('Both players made a mistake' + ' player1 wrote - "' + player1 + '"' + ' end ' + 'player2 wrote - "' + player2 + '"');
} else if (player1 != rock && player1 != scissors && player1 != paper) {
	alert('Player1 made a mistake by writing "' + player1 + '"');
} else {
	alert('Player2 made a mistake by writing "' + player2 + '"');
}
