let yourImg = document.getElementById("your-img");
let compImg = document.getElementById("comp-img");
let yourScore = document.getElementById("yourScore");
let compScore = document.getElementById("compScore");
let winMsg = document.getElementById("winMsg");
let winBtn = document.getElementById("againBtn");
yourImg.classList.add("you-img-size");
compImg.classList.add("you-img-size");

let yourScoreVal = 0;
let compScoreVal = 0;

function displayWinner(yourScoreVal, compScoreVal){
    if(yourScoreVal === 5){
        winMsg.textContent = "You won the game";
        winBtn.style.display = "block";
    }else if(compScoreVal === 5){
        winMsg.textContent = "Computer won the game";
        winBtn.style.display = "block";
    }else if(yourScoreVal === 5 && compScoreVal === 5){
        winMsg.textContent = "Draw"
        winBtn.style.display = "block";
    }
}

function displayScore(randomNumber, uniqueNo){
    if(uniqueNo === 1 && randomNumber === 2){
        compScoreVal += 1;
        compScore.textContent = compScoreVal;
    }else if(uniqueNo === 1 && randomNumber === 3){
        yourScoreVal += 1;
        yourScore.textContent = yourScoreVal;
    }else if(uniqueNo === 2 && randomNumber === 1){
        yourScoreVal += 1;
        yourScore.textContent = yourScoreVal;
    }else if(uniqueNo === 2 && randomNumber === 3){
        compScoreVal += 1;
        compScore.textContent = compScoreVal;
    }else if(uniqueNo === 3 && randomNumber === 1){
        compScoreVal += 1;
        compScore.textContent = compScoreVal;
    }else if(uniqueNo === 3 && randomNumber === 2){
        yourScoreVal += 1;
        yourScore.textContent = yourScoreVal;
    }
    displayWinner(yourScoreVal, compScoreVal);
}

function displayCompImg(uniqueNo){
    let randomNumber = Math.ceil(Math.random() * 3);
    console.log(randomNumber);
    if(randomNumber === 1){
        compImg.src = "assets/rock-hand.png";
    }else if(randomNumber === 2){
        compImg.src = "assets/paper-hand.png";
    }else if(randomNumber === 3){
        compImg.src = "assets/scissors-hand.png";
    }
    displayScore(randomNumber, uniqueNo);
}

function rock(){
    let uniqueNo = 1;
    yourImg.src = "assets/rock-hand.png";
    displayCompImg(uniqueNo);
}

function paper(){
    let uniqueNo = 2;
    yourImg.src = "assets/paper-hand.png";
    displayCompImg(uniqueNo);
}

function scissor(){
    let uniqueNo = 3;
    yourImg.src = "assets/scissors-hand.png";
    displayCompImg(uniqueNo);
}

winBtn.onclick = function(){
    window.location.reload();
}