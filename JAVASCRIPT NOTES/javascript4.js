let userscore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

function genCompChoice() {
    const options =["rocks","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    //  rock paper secissor
    return options [randIdx];

}

function drawGame() {
    console.log("game was deaw");
}
function playGame(userchoice) {
    console.log("user choice=", userchoice);
    // Generate a computer choices --> Modular progarm 
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    }

}

choices.forEach((choices)=>{
    console.log(choices);
    choices.addEventListener("click",()=> {
        const userchoice= choices.getAttribute("id");
        console.log("choices was clicked");
    });
});

