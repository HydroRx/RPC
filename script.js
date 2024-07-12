

let playerScore = 0;
let computerScore = 0;
const roundsToPlay = 5;
let currentRound = 0;

// computer randomly chooses 1 out of 5 options
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(playerChoice) {
    const computerChoice = getComputerChoice(); // get computer choice

    
    document.getElementById('whowon').style.display = 'block';     // set the elements to block again in order to see them when the game starts
    document.getElementById('whochosewhat').style.display = 'block';

    if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
        // check if player won, if player won increase score by 1 and check if the game is over, if it's over display celebration div and then reset game
        playerScore++;
        console.log(playerScore)
        document.getElementById('whowon').innerHTML = '<span style="color: green;">Player</span> won this round';
        document.getElementById('player-score').textContent = playerScore;
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    
        
        if (playerScore === roundsToPlay) {
            console.log("Congratulations! You win the game.");
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('celebration').style.display = 'flex';
            const endGameText = document.getElementById('endgametext');
            endGameText.textContent = 'You Won';
            setTimeout(resetGame, 2500);  
        }
    } else if (playerChoice === computerChoice) {
        // check if it's a tie - continue

        console.log("It's a tie!");
        document.getElementById('whowon').textContent = "It's a tie!";
    } else {
        // check if computer won, add 1 score and check if game is over, if it is then show "You lost" msg, if not continue

        computerScore++;
        document.getElementById('whowon').innerHTML = '<span style="color: red;">Computer</span> won this round';
        document.getElementById('computer-score').textContent = computerScore;
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);

        
        if (computerScore === roundsToPlay) {
            console.log("Sorry, you lost the game.");
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('celebration').style.display = 'flex';
            const endGameText = document.getElementById('endgametext');
            endGameText.textContent = 'You Lost';
            setTimeout(resetGame, 2500); 
        }
    }
    // display who chose what
    // display who won based on what they chose
    // increment round
    document.getElementById('whochosewhat').style.whiteSpace = 'pre-line';
    document.getElementById('whochosewhat').textContent = `You chose: ${playerChoice}\nComputer chose: ${computerChoice}`;
    currentRound++;
    console.log(`Round ${currentRound} completed.`);

   
}


  

function resetGame() {
    // reset all scores
    // hide all the relevant elements
    // display celebration
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

// get options
// check what choice the player made
// start round based on choice
const optionButtons = document.querySelectorAll('.option');
optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = button.getAttribute('data-choice');
        playRound(playerChoice);
    });
});



