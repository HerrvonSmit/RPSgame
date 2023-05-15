//Rock, paper, scissors game //Steen, papier, schaar spel
let computerSelection = ''

//Computer chooses rock, paper or scissors
function computerPlay() {
	let options = ["Rock", "Paper", "Scissors"];
	let selection = options[Math.floor(Math.random() * options.length)];
	console.log("The computer selected " + selection);
	computerSelection = selection;
	return selection;
}
//Game rounds
//Player chooses rock
function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() == "rock") {
		if (computerSelection.toLowerCase() == "rock") {
			return "It's a tie.";
		}
		else if (computerSelection.toLowerCase() == "paper") {
			return "You lose, paper beats rock.";
		}
		else if (computerSelection.toLowerCase() == "scissors") {
			return "You win! Rock beats scissors.";
		}
	}
//Player chooses paper	
	else if (playerSelection.toLowerCase() == "paper") {
		if (computerSelection.toLowerCase() == "paper") {
			return "It's a tie.";
		}
		else if (computerSelection.toLowerCase() == "scissors") {
			return "You lose, scissors beats paper";
		}
		else if (computerSelection.toLowerCase() == "rock") {
			return "You win! paper beats rock.";
		}
	}
//Player chooses scissors	
	else if (playerSelection.toLowerCase() == "scissors") {
		if (computerSelection.toLowerCase() == "scissors") {
			return "It's a tie.";
		}
		else if (computerSelection.toLowerCase() == "rock") {
			return "You lose, rock beats scissors.";
		}
		else if (computerSelection.toLowerCase() == "paper") {
			return "You win! scissors beats paper.";
		}
	}
	
	else {
		console.log("Invalid selection, please try again.");
	}	
}
//Score updater
function updateScore(userChoice) {
	result = playRound(userChoice,computerPlay()).slice(0,8);
	if (result == "You lose") {
			computerScore++;
			document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
			document.getElementById("playerScore").innerHTML = "Speler Score: " + playerScore;
			document.getElementById("outcomeText").innerHTML = "De speler selecteerde " + userChoice + ", De computer selecteerde " + computerSelection + ", Computer wint.";
		}
		else if (result == "You win!") {
			playerScore++
			document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
			document.getElementById("playerScore").innerHTML = "Speler Score: " + playerScore;
			document.getElementById("outcomeText").innerHTML = "De speler selecteerde " + userChoice + ", De computer selecteerde " + computerSelection + ", Speler wint.";
		}
		else {
			document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
			document.getElementById("playerScore").innerHTML = "Speler Score: " + playerScore;
			document.getElementById("outcomeText").innerHTML = "De speler selecteerde " + userChoice + ", De computer selecteerde " + computerSelection + ", Gelijkspel.";
		}
}

let playerScore = 0
let computerScore = 0

const displayOutcome = document.querySelector('#displayOutcome');

let outcomeText = document.createElement('div');
outcomeText.setAttribute('id', 'outcomeText');
outcomeText.textContent = '';

displayOutcome.appendChild(outcomeText);

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
	updateScore('rock');
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
	updateScore('paper');
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
	updateScore('scissors');
});