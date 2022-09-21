var human = new Player('Human', '👴');
var computer = new Player('Computer', '🤖');
var classicGameFighters = ['rock', 'paper', 'scissors'];
var rock = './images/happy-rocks.png';
var paper = './images/happy-paper.png';
var scissors = './images/happy-scissors.png';
var currentGame = '';
var winnerHolder = '';
var timeout = '';

var humanWinsDisplay = document.querySelector('#human-wins');
var changeGameButton = document.querySelector('#change-game-button');
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


changeGameButton.addEventListener('click', changeGame)
buttonContainer.addEventListener('click', startGame);
battleSection.addEventListener('click', selectFighter);

function changeGame() {
  clearTimeout(timeout);
  resetWins();
  displayWins(human.wins, computer.wins);
  changeGameButton.classList.add('hidden');
  battleSection.classList.add('hidden');
  gameSelectionSection.classList.remove('hidden');
  resultSection.classList.add('hidden');
}

function resetWins() {
  human.wins = 0;
  computer.wins = 0;
}

function displayWins(humanWins, computerWins) {
  humanWinsDisplay.innerText = humanWins;
  computerWinsDisplay.innerText = computerWins;
}

function startGame(event) {
  if (event.target === classicGameButton) {
    var game = new Game(human, computer, 'Classic Game');
    currentGame = game;
    gameSelectionSection.classList.add('hidden');
    battleSection.classList.remove('hidden');
    changeGameButton.classList.remove('hidden');
    //make this in a separate render function?
  }
}
function resetGame() {
  gameSelectionSection.classList.add('hidden');
  battleSection.classList.remove('hidden');
  resultSection.classList.add('hidden');
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
  battleSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
  displayWins(human.wins, computer.wins);
  timeout = setTimeout(resetGame, 2200);
}
