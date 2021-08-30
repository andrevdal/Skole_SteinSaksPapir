const stein = 2
const saks = 3
const papir = 4
const gameImage = document.querySelector(".gameImage")
const resultTxt = document.querySelector(".resultTxt")
let globalCH
let timer = 3
let botChoice
let intervalID
function humanClick(humanChoice){
    globalCH = humanChoice
    if(timer>1){
        defeat();
    clearInterval(intervalID)
        return}
    let battle = (humanChoice / botChoice)
    if(battle == 1){
        draw();
    } else if(battle == 0.5 || battle == 1.5 || battle == 1.3333333333333333){
        defeat();
    } else if(battle == 0.6666666666666666 || battle == 0.75 || battle == 2){
        win();
    }
} 
function play(){
    gameImage.innerHTML=`<img class="leftImg" src="src/2.png" alt="">
    <img class="rightImg" src="src/2.png" alt=""> <p class="timer"></p>`
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
    intervalID = setInterval(() => countdown(--timer), 1000);
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
    clearInterval(intervalID)
    gameImage.innerHTML = `<img class="leftImg" src="src/${globalCH}.png" alt="">
    <img class="rightImg" src="src/${botChoice}.png" alt="">`
    console.log("draw");
    setTimeout(play, 3000)
    resultTxt.innerHTML = `<p>(draw)</p>`
}
function defeat(){
    clearInterval(intervalID)
    console.log("defeat");
    gameImage.innerHTML = `<img class="leftImg" src="src/${globalCH}.png" alt="">
    <img class="rightImg" src="src/${botChoice}.png" alt="">`
    resultTxt.innerHTML = `<p class="red">(defeat)</p>`
}
function win(){
    clearInterval(intervalID)
    gameImage.innerHTML = `<img class="leftImg" src="src/${globalCH}.png" alt="">
    <img class="rightImg" src="src/${botChoice}.png" alt="">`
    console.log("win");
    resultTxt.innerHTML = `<p class="green">(win)</p>`
}