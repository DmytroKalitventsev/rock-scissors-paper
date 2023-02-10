let player1 = prompt('Player1 Your choice: r - rock, s - scissors, p -paper');
let player2 = prompt('Player2 Your choice: r - rock, s - scissors, p -paper');

let rock = 'r';
let scissors = 's';
let paper = 'p';

if (player1 == rock && player2 == scissors || player1 == scissors && player2 == paper || player1 == paper && player2 == rock) {
	alert('Player1 Win');
} else if (player2 == rock && player1 == scissors || player2 == scissors && player1 == paper || player2 == paper && player1 == rock) {
	alert('Player2 Win');
} else if (player1 == rock && player2 == rock || player1 == scissors && player2 == scissors || player1 == paper && player2 == paper) {
	alert('Draw');
} else if (player1 != rock && player1 != scissors && player1 != paper && player2 != rock && player2 != scissors && player2 != paper) {
	alert('Both players made a mistake');
} else if (player1 != rock && player1 != scissors && player1 != paper) {
	alert('Player1 made a mistake');
} else {
	alert('Player2 made a mistake');
}
