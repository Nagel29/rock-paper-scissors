var humanWinsDisplay = document.querySelector('#human-wins');
var computerWinsDisplay = document.querySelector('#computer-wins');
var gameSelectionSection = document.querySelector('#game-selection-section');
var buttonContainer = document.querySelector('#button-container');
var classicGameButton = document.querySelector('#classic-game-button');
var advancedGameButton = document.querySelector('#advanced-game-button');
var battleSection = document.querySelector('#battle-section');
var rockButton = document.querySelector('#rock-button');
var paperButton = document.querySelector('#paper-button');
var scissorsButton = document.querySelector('#scissors-button');
var resultSection = document.querySelector('#result-section');
var resultDisplay = document.querySelector('#result-display');
var winner = document.querySelector('#winner');
var human = new Player('Human', '👴');
var computer = new Player('Computer', '🤖');
var classicGameFighters = ['rock', 'paper', 'scissors'];
var rock = './images/happy-rocks.png';
var paper = './images/happy-paper.png';
var scissors = './images/happy-scissors.png';
var currentGame = '';
var winnerHolder = '';
//this will need to later go into an event listener/handler. This will be for classic game. Will need another for advanced.



buttonContainer.addEventListener('click', startGame);
battleSection.addEventListener('click', selectFighter);

function startGame(event) {
  if (event.target === classicGameButton) {
    var game = new Game(human, computer, 'Classic Game');
    currentGame = game;
    gameSelectionSection.classList.add('hidden');
    battleSection.classList.remove('hidden');
    //make this in a separate render function?
  }
}

function selectFighter(event) {
  human.takeTurn(event.target.dataset.name);
}

function computerTakeTurn() {
  if (currentGame.type === 'Classic Game') {
    computer.fighter = classicGameFighters[Math.floor(Math.random() * classicGameFighters.length)];
    currentGame.executeClassicGame();
  }
}

function renderResults() {
  winner.innerText = winnerHolder;
  resultDisplay.innerHTML = `<img src="${eval(human.fighter)}" height="250px" width="250px"><img src="${eval(computer.fighter)}" height="250px" width="250px">`;
  humanWinsDisplay.innerText = human.wins;
  computerWinsDisplay.innerText = computer.wins;
  battleSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
}
