
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
                    return 0;
                case 1: //npc paper
                    console.log("You lose, NPC wins")
                    return 0;
                case 2: //npc scissor
                    console.log("You win!")
                    return 1;
            }
        case 1:  //player: paper
            switch (npcChoice){
                case 1: //npc paper
                    console.log("Its a draw")
                    return 0;
                case 2: //npc scissor
                    console.log("You lose, NPC wins")
                    return 0;
                case 0: //npc rock
                    console.log("You win!")
                    return 1;
            }

        case 2:  //player: scissor
            switch (npcChoice){
                case 2: //npc scissor
                    console.log("Its a draw")
                    return 0;
                case 0: //npc rock
                    console.log("You lose, NPC wins")
                    return 0;
                case 1: //npc paper
                    console.log("You win!")
                    return 1;
            }
    }
}

function game(){
    for (i=0; i<5; i++){
        console.log("Game "+i);
        let npcChoice = getComputerChoice();
        let playerChoice = prompt("Pick your weapon:");

        console.log("NPC Choice: "+ getChoiceString(npcChoice));
        console.log("Your Choice: "+ playerChoice);
        playRound(npcChoice,getChoiceNumber(playerChoice));
        console.log('\n');
    }
}


game();