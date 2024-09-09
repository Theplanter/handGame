
let userScore=0
let comScore=0
let tieCount=0

const hand = ['rock','paper','scissor']

const PScore = document.querySelector("#userS")  
const CScore = document.querySelector("#compS")  
const rest = document.querySelector("#reset")  

PScore.innerHTML = userScore
CScore.innerHTML = comScore




    //the div container "block" gets all the buttons in the div
const block = document.querySelector("#block")

//when the button is click the event listener is activated 
block.addEventListener("click", (event)=>{
    
    let target =event.target
    let comput = hand[Math.floor(Math.random() * 3)]
    console.log(comput)
    
    switch(target.id){
       
        case'rock':
        console.log(target.id)
        return playGame(target.id,comput)
        
        case'paper':
        console.log(target.id) 
        return playGame(target.id,comput)
        
        case'scissor':
        console.log(target.id)
        return playGame(target.id,comput)
    }}
    
  
)



function playGame(userI, comI){
/*this compares the user and the computer input the who won the round
whoever wins gets their scores increased*/ 

    if(userI==="rock" && comI==="scissor"||userI==="paper" && comI==="rock" ||
        userI==="scissor" && comI==="paper"){
        
            userScore++
            console.log(`user won that round `+userScore)
            PScore.innerHTML = userScore
        
        }else if(comI==userI){
               //add tie counter
                console.log("there was a tie")            
        
        }else{
            comScore++
            console.log(`computer won that round ` + comScore)
            CScore.innerHTML = comScore
        }
        //when one of the players get to five the gameover function is pulled
        if(userScore===5){
            gameOver()
        }else if(comScore===5){
            gameOver()
        }
    }

    function gameOver(){

        if(userScore>comScore){

            document.getElementById("rock").setAttribute("disabled","disabled")
            document.getElementById("paper").setAttribute("disabled","disabled")
            document.getElementById("scissor").setAttribute("disabled","disabled")

    }else if(comScore>userScore){
        document.getElementById("rock").setAttribute("disabled","disabled")
        document.getElementById("paper").setAttribute("disabled","disabled")
        document.getElementById("scissor").setAttribute("disabled","disabled")
    }
    //then addeventlistener to enable other buttons, disable reset button visibility and reset score
    console.log("game over")
}