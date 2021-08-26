const stein = 2
const saks = 3
const papir = 4
let timer = 3
let botChoice

function humanClick(humanChoice){
    if(timer>1){
        defeat()
        return
    } else {        
        let battle = (humanChoice / botChoice)
    if(battle == 1){
        draw();
    } else if(battle == 0.5 || battle == 1.5 || battle == 1.3333333333333333){
        defeat();
    } else if(battle == 0.6666666666666666 || battle == 0.75 || battle == 2){
        win();
    }
    }
}

function play(){
    timer = 3
    document.querySelector(".timer").innerHTML = 3;
    let randomNr = Math.round(Math.random() * 2)
    if(randomNr == 0){
        botChoice = stein
    } else if(randomNr == 1){
        botChoice = saks
    }
    else if(randomNr == 2){
        botChoice = papir
    }
    const intervalID = setInterval(() => countdown(--timer), 1000);
    function countdown(text) {
        if(timer > 0){
        document.querySelector(".timer").innerHTML = text;
        }else {
            document.querySelector(".timer").innerHTML = "0";
            defeat()
        }
        if (timer == 0) clearInterval(intervalID)
    }
}


function draw(){
    console.log("draw");
}
function defeat(){
    console.log("defeat");
}
function win(){
    console.log("win");
}