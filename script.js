function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie round!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win the round! " + humanChoice + " beats " + computerChoice);
        return "human"
    } else {
        console.log("You lose the round! " + computerChoice + " beats " + humanChoice);
        return "computer"
    }
}

function askHowManyRounds() {
    let rounds = parseInt(prompt("How many rounds would you like to play?"));
    if (isNaN(rounds) || rounds <= 0) {
        console.log("Please enter a valid number of rounds.");
        return askHowManyRounds();
    }
    return rounds;
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        console.log("Round: " + (i + 1));
        let result = playRound(getHumanChoice(), getComputerChoice());
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        console.log("Current Score - You: " + humanScore + " Computer: " + computerScore);
    }

    let message = "";

    if (humanScore > computerScore) {
        message = "Congratulations! You won the game with a score of " + humanScore + " to " + computerScore + "!";
    } else if (computerScore > humanScore) {
        message = "Sorry! The computer won the game with a score of " + computerScore + " to " + humanScore + "!";
    } else {
        message = "It's a tie game!";
    }
    
    alert(message);
    console.log(message);
}

playGame(askHowManyRounds());
