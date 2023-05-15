//Rock, paper, scissors game //Steen, papier, schaar spel
let computerSelection = ''

//Computer chooses rock, paper or scissors
function computerPlay() {
	let options = ["steen", "papier", "schaar"];
	let selection = options[Math.floor(Math.random() * options.length)];
	console.log("The computer selected " + selection);
	computerSelection = selection;
	return selection;
}
//Game rounds
//Player chooses rock
function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() == "steen") {
		if (computerSelection.toLowerCase() == "steen") {
			return "It's a tie.";
		}
		else if (computerSelection.toLowerCase() == "papier") {
			return "You lose, paper beats rock.";
		}
		else if (computerSelection.toLowerCase() == "schaar") {
			return "You win! Rock beats scissors.";
		}
	}
//Player chooses paper	
	else if (playerSelection.toLowerCase() == "papier") {
		if (computerSelection.toLowerCase() == "papier") {
			return "It's a tie.";
		}
		else if (computerSelection.toLowerCase() == "schaar") {
			return "You lose, scissors beats paper";
		}
		else if (computerSelection.toLowerCase() == "steen") {
			return "You win! paper beats rock.";
		}
	}
//Player chooses scissors	
	else if (playerSelection.toLowerCase() == "schaar") {
		if (computerSelection.toLowerCase() == "schaar") {
			return "It's a tie.";
		}
		else if (computerSelection.toLowerCase() == "steen") {
			return "You lose, rock beats scissors.";
		}
		else if (computerSelection.toLowerCase() == "papier") {
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
	updateScore('steen');
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
	updateScore('papier');
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
	updateScore('schaar');
});