let userScore=0;
let compScore=0;    //Initiallly the score should be zero

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");


const drawGame=() =>{
    console.log("The is Draw...");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

//Computer choice function 
const genCompChoice = () =>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
}

// Dispay Function of the both players -user and comp 
// Also a main function 
const playGame = (userChoice) =>{
    console.log("User choice=",userChoice);              
    const compChoice=genCompChoice(); // function call for get the comp choice
    console.log("Computer choice=",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = compChoice==="paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice==="scissor"? false : true;
        }
        else{
            userWin = compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

// User Choice Function
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice); // Function call and Send user choice to playGame function

    });
});

