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

function game(n) {
    loop n times {
        score = 0
        if (player win computer){
            score++
        }
        if score > 3 {
            alert("you are ultimate winner.")
        } else {
            alert("you are ultimate loser.")
        }
    }
}
*/
let score = 0;
let computerScore = 0;
let times = 5;

gameChoices = ["rock","paper","scissors"]
function main(){
    game(times)

}

function getComputerChoice() {
   result = gameChoices[Math.floor(Math.random() * gameChoices.length)]
   return result
   
}

function getPlayerChoices() {
   let choice = ""
   
   while (choice != "rock" || choice != "paper" || choice != "scissors"){
        choice = prompt("Choose your choices(rock,paper,scissors): ").toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors"){
            return choice
        } else {
            alert("wrong input")
        }
        
   }
    
}

function compareSelection(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        times++;
        return "tie!"
    }
    
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return "You Lose! paper beat rock"
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        score++
        return "You Win! rock beat scissors"
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        score++
        return "You Win! paper beat rock"
    } 
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        return "You Lose! scissors beat paper"
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        return "You Lose! rock beat scissors"
    } 
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        score++
        return "You Win! scissors beat paper"
    } 


}

function game(){
    let i = 0;
    while (i != times){
        const playerSelection = getPlayerChoices();
        const computerSelection = getComputerChoice();
        alert(compareSelection(playerSelection, computerSelection))
        console.log("times: ",times)
        i++
        if (score == 3){
            alert("You reached 3 score. You are ultimate winner!")
            break
        }else if (computerScore == 3){
            alert("Computer reached 3 score before you, you lose. play again if you want.")
            break
        }
    }
    }
    


main();
