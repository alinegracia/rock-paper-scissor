const buttons = document.querySelectorAll('.btn-game');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const play = document.getElementById('play');

const playerChoiseElement = document.createElement('h3');
const computerChoiseElement = document.createElement('h3');

let playerChoise;
let computerChoise;
let result;
let choise = ['rock', 'paper', 'scissors'];

playerChoiseElement.classList.add('choise');
computerChoiseElement.classList.add('choise');

function randomChoise() {
    let random = Math.floor(Math.random() * choise.length);
    computerChoise = choise[random];
    computerChoiseElement.textContent = computerChoise;
    computer.appendChild(computerChoiseElement);
};

function gameResult() {
    if(playerChoise === computerChoise) {
        result = 'It\'s a Draw!';
    } else if(playerChoise === 'rock') {
                if(computerChoise === 'paper') {
                    result = 'Computer won !';
                } else {
                    result = 'Player won !';
                }
    } else if(playerChoise === 'paper') {
                if(computerChoise === 'scissors') {
                    result = 'Computer won !';
                } else {
                    result = 'Player won !';
                }
    } else if(playerChoise === 'scissors') {
                if(computerChoise === 'rock') {
                    result = 'Computer won !';
                }else {
                    result = 'Player won !';
                }
    }
    return play.textContent = result;
}

buttons.forEach(function(currentBtn) {
    currentBtn.addEventListener('click', event => {
        playerChoise = event.target.id;
        playerChoiseElement.textContent = playerChoise;
        player.appendChild(playerChoiseElement);

        randomChoise();
        gameResult();
    })
});