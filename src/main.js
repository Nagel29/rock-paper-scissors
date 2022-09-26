//Global Variables
var human = new Player('Human', '👴');
var computer = new Player('Computer', '🤖');
var classicGameFighters = ['rock', 'paper', 'scissors'];
var advancedGameFighters = ['rock', 'paper', 'scissors', 'lizard', 'alien'];
var rock = './images/happy-rocks.png';
var paper = './images/happy-paper.png';
var scissors = './images/happy-scissors.png';
var lizard = './images/lizard.png';
var alien = './images/flat-alien.png';
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
var classicBattle = document.querySelector('#classic-battle-section');
var advancedBattle = document.querySelector('#advanced-battle-section');
var rockButton = document.querySelector('#rock-button');
var paperButton = document.querySelector('#paper-button');
var scissorsButton = document.querySelector('#scissors-button');
var resultSection = document.querySelector('#result-section');
var resultDisplay = document.querySelector('#result-display');
var winner = document.querySelector('#winner');

//Event Listeners
changeGameButton.addEventListener('click', changeGame)
buttonContainer.addEventListener('click', startGame);
battleSection.addEventListener('click', selectFighter);
window.addEventListener('beforeunload', saveWins);
window.addEventListener('load', displaySavedWins);

//Functions
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function changeGame() {
  clearTimeout(timeout);
  resetWins();
  displayWins(human.wins, computer.wins);
  hide(changeGameButton);
  hide(battleSection);
  hide(resultSection);
  show(gameSelectionSection);
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
    hide(gameSelectionSection);
    hide(advancedBattle);
    show(battleSection);
    show(classicBattle);
    show(changeGameButton);
  }
  if (event.target === advancedGameButton) {
    var game = new Game(human, computer, 'Advanced Game');
    currentGame = game;
    hide(gameSelectionSection);
    hide(classicBattle);
    show(battleSection);
    show(advancedBattle);
    show(changeGameButton);
  }
}

function resetGame() {
  hide(gameSelectionSection);
  hide(resultSection);
  show(battleSection);
}

function selectFighter(event) {
  human.takeTurn(event.target.dataset.name);
}

function computerTakeTurn() {
  if (currentGame.type === 'Classic Game') {
    computer.fighter = classicGameFighters[Math.floor(Math.random() * classicGameFighters.length)];
    currentGame.executeClassicGame();
  }
  if (currentGame.type === 'Advanced Game') {
    computer.fighter = advancedGameFighters[Math.floor(Math.random() * advancedGameFighters.length)];
    currentGame.executeAdvancedGame();
  }
}

function renderResults() {
  winner.innerText = winnerHolder;
  resultDisplay.innerHTML = `<img src="${eval(human.fighter)}" height="250px" width="250px"><img src="${eval(computer.fighter)}" height="250px" width="250px">`;
  hide(battleSection);
  show(resultSection);
  displayWins(human.wins, computer.wins);
  timeout = setTimeout(resetGame, 2200);
}

function saveWins() {
  localStorage.setItem('saved-human-wins', human.wins)
  localStorage.setItem('saved-computer-wins', computer.wins)
}

function displaySavedWins() {
  human.wins = localStorage.getItem('saved-human-wins');
  computer.wins = localStorage.getItem('saved-computer-wins');
  displayWins(human.wins, computer.wins);
}
