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
var computer = new Player('Computer', '🤖');
var classicGameFighters = ['rock', 'paper', 'scissors'];

//this will need to later go into an event listener/handler. This will be for classic game. Will need another for advanced.



buttonContainer.addEventListener('click', startGame);


function startGame(event) {
  var human = new Player('Human', '👴');
  if (event.target === classicGameButton) {
    var game = new Game(human, computer, 'Classic Game');
    gameSelectionSection.classList.add('hidden');
    battleSection.classList.remove('hidden');
 }

}

function computerTakeTurn() {
  if (game.type === 'Classic Game') {
    computer.fighter = classicGameFighters[Math.floor(Math.random() * classicGameFighters.length)];
    game.executeClassicGame();
  }
}
