function getRandomhand(){
    //this creates a random number between 1 and 3 
    let comput = Math.floor(Math.random() * (3 - 1 +1)+1)
    console.log(comput)

    //this compares to see what the number will become
    if(comput===1){
        return "rock"
    }else if(comput===2){
        return "paper"
    }else{
        return "scissors"
    }


}


let com = getRandomhand()