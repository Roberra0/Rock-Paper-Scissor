
// Rock Paper Scissor


//User prompted for choice
// Computer generates random choice
//Comparison
// Win/lose messaging
//End

// Rock = 0, Paper = 1, Scissor = 2

function getComputerChoice () {
    return Math.floor(Math.random()*3);
}

function getChoiceString (numericChoice){
    // console.log(numericChoice);
    switch (numericChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissor";
        default:
            return console.log("No case for given value");
    }
}

function getChoiceNumber (stringChoice){
    // console.log(numericChoice);
    stringChoice = stringChoice.toLowerCase();
    switch (stringChoice){
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissor": 
            return 2;
        default:
            return console.log("No case for given value");
    }
}

function playRound (npcChoice, playerChoice){
    switch (playerChoice){
        case 0: //player: rock
            switch (npcChoice){
                case 0: //npc rock
                    console.log("Its a draw")
                    return "Its a draw";
                case 1: //npc paper
                    console.log("You lose, NPC wins")
                    npcTally ++;
                    return "You lose, NPC wins";
                case 2: //npc scissor
                    console.log("You win!");
                    yourTally++;
                    return "You win!";
            }
        case 1:  //player: paper
            switch (npcChoice){
                case 1: //npc paper
                    console.log("Its a draw");
                    return "Its a draw";
                case 2: //npc scissor
                    console.log("You lose, NPC wins");
                    npcTally++;
                    return "You lose, NPC wins";
                case 0: //npc rock
                    console.log("You win!");
                    yourTally++;
                    return "You win!";
            }

        case 2:  //player: scissor
            switch (npcChoice){
                case 2: //npc scissor
                    console.log("Its a draw");
                    return "Its a draw";
                case 0: //npc rock
                    console.log("You lose, NPC wins");
                    npcTally++;
                    return "You lose, NPC wins";
                case 1: //npc paper
                    console.log("You win!");
                    yourTally++;
                    return "You win!";
            }
    }
}

function game(playerChoice){
        // console.log("Game "+i);
        let npcChoice = getComputerChoice();
        console.log("NPC Choice: "+ getChoiceString(npcChoice));
        console.log("Your Choice: "+ playerChoice);
        gameResult = document.createElement('p');
        gameResult.textContent = playRound(npcChoice,getChoiceNumber(playerChoice)) + " | NPC Choice: "+ getChoiceString(npcChoice) + " | Your Choice: "+ playerChoice;
        document.getElementById("Score").appendChild(gameResult);
        gameTally.textContent = "You-"+yourTally + " | NPC-"+npcTally;

        if(yourTally+npcTally == 5){
            yourTally>npcTally? 
                alert('You are the winner') :
                alert('NPC is the winner');
            yourTally = 0;
            npcTally = 0;
        }
}


// game();


// Add event listners
let npcTally = 0;
let yourTally = 0;
let gameTally = document.createElement('h2');
gameTally.textContent = "You-"+yourTally + " | NPC-"+npcTally;
document.getElementById("Score").appendChild(gameTally);

const imageButtons = document.querySelectorAll('button'); 	// returns node list. It looks and acts much like an array.
imageButtons.forEach((button) => {
    button.addEventListener('click',()=>{
        console.log(button.id);
        game(button.id);
    });
});