

let playerScore = 0;
let computerScore = 0;
const roundsToPlay = 5;
let currentRound = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    document.getElementById('whowon').style.display = 'block';
    document.getElementById('whochosewhat').style.display = 'block';

    if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
        playerScore++;
        console.log(playerScore)
        document.getElementById('whowon').innerHTML = '<span style="color: green;">Player</span> won this round';
        document.getElementById('player-score').textContent = playerScore;
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    
        // Check if player has won the game
        if (playerScore === roundsToPlay) {
            console.log("Congratulations! You win the game.");
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('celebration').style.display = 'flex';
            setTimeout(resetGame, 2500);  // Show the celebration message for 5 seconds before resetting the game
        }
    } else if (playerChoice === computerChoice) {
        console.log("It's a tie!");
        document.getElementById('whowon').textContent = "It's a tie!";
    } else {
        computerScore++;
        document.getElementById('whowon').innerHTML = '<span style="color: red;">Computer</span> won this round';
        document.getElementById('computer-score').textContent = computerScore;
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    
        // Check if computer has won the game
        if (computerScore === roundsToPlay) {
            console.log("Sorry, you lost the game.");
            resetGame();
        }
    }

    document.getElementById('whochosewhat').style.whiteSpace = 'pre-line';
    document.getElementById('whochosewhat').textContent = `You chose: ${playerChoice}\nComputer chose: ${computerChoice}`;
    currentRound++;
    console.log(`Round ${currentRound} completed.`);

   
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('celebration').style.display = 'none';
    document.getElementById('whowon').style.display = 'none';
    document.getElementById('whochosewhat').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
}


const optionButtons = document.querySelectorAll('.option');
optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = button.getAttribute('data-choice');
        playRound(playerChoice);
    });
});



