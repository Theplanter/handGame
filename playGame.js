let userScore=1, comScore =1

function getRandomhand(){
    //this creates a random number between 1 and 3 
    let comput = Math.floor(Math.random() * (3 - 1 +1)+1)

    //this compares to see what the number will become
    if(comput===1){
        return "rock"
    }else if(comput===2){
        return "paper"
    }else{
        return "scissor"
    }


}
function getUser(){
    /*this prompt the user until there is a correct input
    when the correct one is inputted then the result is returned*/ 
    let user = prompt("Type Rock, Paper, or Scissors, to see if you can beat the computer").toLowerCase();
    let thing = false
    while(thing == false)
        {
    if(user==="rock"||user==="paper" ||user==="scissor")
    {
        thing = true
        return user
    }else{
        user = prompt("Type Rock, Paper, or Scissors, to see if you can beat the computer")
    }
}
}
function playGame(userI, comI){
/*this compares the user and the computer input the who won the round
whoever wins gets their scores increased*/ 
    if(userI==="rock" && comI==="scissor"||userI==="paper" && comI==="rock" ||
        userI==="scissor" && comI==="paper"){
            console.log(`user won that round`)
            userScore++
        }else if(comI===userI){
                
                console.log("there was a tie")            
        }else{
            console.log(`computer won that round`)
            comScore++
        }

}
/*the while loop stays active until the counter hits 5
while the loop is active it actives all the functions*/
let counter =1
while(counter<=5)
    {
        console.log(`round ${counter}`)
let com = getRandomhand()
console.log(com)

let user = getUser()
console.log(userScore)
playGame(user , com);
counter++
}
/*the if statement checks to see who has won the whole game*/
if(userScore>comScore){
    console.log("User as won the game")

}else if(comScore>userScore)
    {
    console.log("computer as won the game")

}else{
    console.log("the game is a draw")
}