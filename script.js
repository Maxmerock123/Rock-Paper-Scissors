/* 
PsudoCode:

gameChoices = ["rock","paper","scissors"]

function getComputerChoice(){
    let result = random from 3 choices [rock,paper,scissors]
    return result
}


function getPlayerChoice() {
    get input from user using prompt()
    input = prompt()
    result = input.lowercase()
    return result

}

playerSelection = getPlayerChoices();
computerSelection = getComputerChoices();

function compareSelection (playerSelection, computerSelection) {
    rock win scissors
    scissors win paper
    paper win rock

    print("winner is ...")
    return winner
}
*/

gameChoices = ["rock","paper","scissors"]
function main(){
    getPlayerChoices();
}

function getComputerChoice() {
   result = gameChoices[Math.floor(Math.random() * gameChoices.length)]
   return result
   
}

function getPlayerChoices() {
    return 0;
}



main();
