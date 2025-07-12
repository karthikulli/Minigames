let currentGame = null;

function showGameList() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("gameList").style.display = "block";
}

function showGame(id) {
    if (currentGame) document.getElementById(currentGame).style.display = "none";
    document.getElementById("gameList").style.display = "none";
    document.getElementById(id).style.display = "block";
    currentGame = id;
    if (id === 'additionGame') generateAddition();
    if (id === 'bombDefuser') startTimer();
}

const randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    const input = parseInt(document.getElementById("guessInput").value);
    const msg = document.getElementById("guessMessage");


    if (input !== "") {
        if (input === randomNumber) {
            msg.textContent = "Correct..You Win..!"
            msg.style.color = "green";
            msg.style.fontSize = "30px"
        } else if (input > randomNumber) msg.textContent = "Too high!";
        else if (input < randomNumber) msg.textContent = "Too low!";
    }

}



let a, b;

function generateAddition() {
    a = Math.ceil(Math.random() * 50);
    b = Math.ceil(Math.random() * 50);
    document.getElementById("num1").textContent = a;
    document.getElementById("num2").textContent = b;
    document.getElementById("sumMessage").textContent = "";
}

function checkSum() {
    const input = parseInt(document.getElementById("sumInput").value);
    const msg = document.getElementById("sumMessage");
    if (input === a + b) msg.textContent = "Correct!";
    else msg.textContent = "Try again.";
}

let bombCounter = 10;

function startTimer() {
    bombCounter = 10;
    const timer = document.getElementById("timer");
    timer.textContent = bombCounter;
    const interval = setInterval(() => {
        bombCounter--;
        timer.textContent = bombCounter;
        if (bombCounter === 0) {
            clearInterval(interval);
            deffuseMessage_el.textContent = "BOOM!... you failed to Defuse.....";
            deffuseMessage_el.style.color = "red"
        }
    }, 1000);
    let defuseInput_el = document.getElementById("defuseInput");
    let deffuseMessage_el = document.getElementById("deffuseMessage");
    deffuseMessage_el.textContent = "";
    defuseInput_el.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && this.value === "2025" && bombCounter > 0) {
            clearInterval(interval);
            deffuseMessage_el.textContent = "You did it Bomb Defused!";
            deffuseMessage_el.style.color = "green"
            defuseInput_el.textContent = "";
        }
    });
}

function calculateFlames() {
    const name1 = document.getElementById("name1").value.toLowerCase();
    const name2 = document.getElementById("name2").value.toLowerCase();
    let combined = name1 + name2;
    let flames = ['Friends-👫🫂', 'Love-👨💓👩', 'Affection-👨🧲👩', 'Marriage-👨💍👩', 'Enemies-👨🔥👩', 'Siblings-👥'];
    const result = flames[combined.length % 6];
    document.getElementById("flamesResult").textContent = `Your relationship is: ${result}`;
}



let round = 1;
let user1Score = 0;
let user2Score = 0;
let minVal, maxVal, user1Name, user2Name;

function startGame() {
    minVal = parseInt(document.getElementById("min").value);
    maxVal = parseInt(document.getElementById("max").value);
    user1Name = document.getElementById("user1").value;
    user2Name = document.getElementById("user2").value;

    if (!minVal || !maxVal || !user1Name || !user2Name || minVal >= maxVal) {
        alert("Please enter valid inputs.");
        return;
    }

    document.getElementById("rounds").classList.remove("hidden");
    document.getElementById("round-number").innerText = round;
}

function playRound() {
    const guess1 = parseInt(document.getElementById("guess1").value);
    const guess2 = parseInt(document.getElementById("guess2").value);
    const randomNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

    if (guess1 === randomNum) user1Score++;
    if (guess2 === randomNum) user2Score++;

    round++;
    document.getElementById("guess1").value = '';
    document.getElementById("guess2").value = '';

    if (round <= 5) {
        document.getElementById("round-number").innerText = round;
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("rounds").classList.add("hidden");
    let result = '';

    if (user1Score > user2Score) {
        result = `${user1Name} is the winner! (${user1Score} correct guesses)`;
    } else if (user2Score > user1Score) {
        result = `${user2Name} is the winner! (${user2Score} correct guesses)`;
    } else {
        result = `It's a draw! Both guessed correctly ${user1Score} times.`;
    }

    document.getElementById("result").innerText = result;
}


let count = 0;

function incrementCounter() {
    count++;
    document.getElementById("clickCount").textContent = count;
}

function changeColor() {
    const colors = ['#f99', '#9f9', '#99f', '#ff9', '#9ff', '#f9f'];
    const box = document.getElementById("colorBox");
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
