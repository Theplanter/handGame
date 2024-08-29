function getRandomhand(){
    //this creates a random number between 1 and 3 
    let comput = Math.floor(Math.random() * (3 - 1 +1)+1)

    //this compares to see what the number will become
    if(comput===1){
        return "rock"
    }else if(comput===2){
        return "paper"
    }else{
        return "scissors"
    }


}
function getUser(){
    let user = prompt("Type Rock, Paper, or Scissors, to see if you can beat the computer");
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

let com = getRandomhand()
console.log(com)

let user = getUser()
console.log(user)