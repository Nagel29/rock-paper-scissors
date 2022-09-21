class Game {
  constructor(human, computer, type) {
    this.human = human;
    this.computer = computer;
    this.type = type;
    this.classicGameResults = {
      rock: {
        rock: 'Draw!',
        paper: 'Computer Wins!',
        scissors: 'Human Wins!',
      },
      paper: {
        rock: 'Human Wins!',
        paper: 'Draw!',
        scissors: 'Computer Wins!',
      },
      scissors: {
        rock: 'Computer Wins!',
        paper: 'Human Wins!',
        scissors: 'Draw!',
      }
    }
  }
  executeClassicGame() {
    var result = this.classicGameResults[this.human.fighter][this.computer.fighter];
    if (result === 'Human Wins!') {
      this.human.wins++;
    }
    if (result === 'Computer Wins!') {
      this.computer.wins++;
    }
    resetGame();
    return result;
  }
}

//clicking the type of game will kick off the game. Which means it should create a new instance of Game.
// will put an event listener on the button section. Based on which button is clicked, it will pass through a game type.
//Defaults right now to human and computer, but can change later if i'd like to.
