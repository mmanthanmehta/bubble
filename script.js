var Timer = 60
var Score = 0
var Hit = 0

function hitNum(){
    Hit = Math.floor(Math.random()*10)
    document.querySelector(".box1").textContent = Hit
}

function makeBubble(){
    var clutter = "";

for(var i =1; i<=220; i++){
    var num = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${num}</div> `
}

document.querySelector(".pbtm").innerHTML = clutter 
}

function runTimer(){
    Timer = 60
    var st = setInterval(function(){
        if(Timer > 0){
            Timer--
            document.querySelector(".box2").textContent =Timer
        }
        else{
            document.querySelector(".pbtm").innerHTML = `<div class="end"><h1>End Game</h1><div class="pscore">Your Score : ${Score}</div></div>`
            clearInterval(st)
            restartgame()
        }
    }, 1000)
}

function increaseScore(){
    Score += 10
    document.querySelector(".box3").textContent = Score
}

document.querySelector(".pbtm").addEventListener("click",function(detail){
    var clickNum = Number(detail.target.textContent)
    // alert(detail.target.textContent)
    if(Hit == clickNum){
        increaseScore()
        makeBubble()
        hitNum()
    }
    else{
        makeBubble()
    }
})

function restartgame(){
    var re = 5
    var st = setInterval(function(){
        if(re > 0){
            re--
            document.querySelector(".pbtm").innerHTML = `<div class="end"><h1>End Game</h1><div class="pscore">Your Score : ${Score}</div></div>`
        }
        else{
            hitNum()
            runTimer()
            makeBubble()
            clearInterval(st)
            Score = 0
        }
    }, 1000)
} 

hitNum()
runTimer()
makeBubble()
