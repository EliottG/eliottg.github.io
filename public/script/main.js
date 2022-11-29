

let gameWrite = document.getElementById('game-write');
let start = document.getElementById('start');

let result = document.getElementById('result');
let round = document.getElementById('round');
let secretResult = "secret";

let value = null;
let number1 = null;
let number2 = null;
let sign = null;

let roundNumber = 1;

const getRandomInt = (max)=> {
    return Math.floor(Math.random() * max + 1);
}

const setNewNumbers = () => {
    number1 = getRandomInt(9);
    number2 = getRandomInt(9);
    setSign();
    gameWrite.innerHTML = `${number1} ${sign} ${number2}`
}

const setSign = () => {
    switch (getRandomInt(3)) {
        case 1:
            sign = "x"
            secretResult = number1 * number2
            break;
        case 2:
            sign = "-"
            secretResult = number1 - number2
            break;
        case 3:
            sign = '+'
            secretResult = number1 + number2
            break;
        default:
            sign = "x"
            secretResult = number1 * number2
    }
}

start.addEventListener('click',() => gameStart())


const gameStart = () => {
    roundNumber = 1;
    round.innerHTML = `Round ${roundNumber} / 40`;
    start.innerHTML = "Recommencer"
    setNewNumbers()
}

result.addEventListener("input", (event) => {
     value = event.target.value
     if (event.target.value == secretResult) {
         roundNumber++;
         round.innerHTML = `Round ${roundNumber} / 40`;
        document.getElementById('result').value = "";
        if (roundNumber >= 40 ) {
            return gameEnd();
        }
        setNewNumbers();
     }
})

const gameEnd = () => {
    round.innerHTML = `Partie terminée 40 / 40`;
    gameWrite.innerHTML  = "";
    number1 = null;
    number2 = null;
    secretResult = "secret"
}