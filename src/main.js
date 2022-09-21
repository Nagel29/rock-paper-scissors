var humanWinsDisplay = document.querySelector('#human-wins');
var computerWinsDisplay = document.querySelector('#computer-wins');
var classicGameButton = document.querySelector('#classic-game-button');
var advancedGameButton = document.querySelector('#advanced-game-button');
var rockButton = document.querySelector('#rock-button');
var paperButton = document.querySelector('#paper-button');
var scissorsButton = document.querySelector('#scissors-button');
var computer = new Player('Computer', '🤖');
var classicGameFighters = ['rock', 'paper', 'scissors'];

//this will need to later go into an event listener/handler. This will be for classic game. Will need another for advanced.
var human = new Player('Human', '👴');
var game = new Game(human, computer, 'Classic Game');

function computerTakeTurn() {
  if (game.type === 'Classic Game') {
    computer.fighter = classicGameFighters[Math.floor(Math.random() * classicGameFighters.length)];
    game.executeClassicGame();
  }
}
