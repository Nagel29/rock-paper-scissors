class Game {
  constructor(human, computer, type) {
    this.human = human;
    this.computer = computer;
    this.type = type;
    this.classicGameResults = {
      rock: {
        rock: 'Draw!',
        paper: 'Computer won this round!',
        scissors: 'Human won this round!',
      },
      paper: {
        rock: 'Human won this round!',
        paper: 'Draw!',
        scissors: 'Computer won this round!',
      },
      scissors: {
        rock: 'Computer won this round!',
        paper: 'Human won this round!',
        scissors: 'Draw!',
      }
    }
    this.advancedGameResults = {
      rock: {
        rock: 'Draw!',
        paper: 'Computer won this round!',
        scissors: 'Human won this round!',
        lizard: 'Human won this round!',
        alien: 'Computer won this round!',
      },
      paper: {
        rock: 'Human won this round!',
        paper: 'Draw!',
        scissors: 'Computer won this round!',
        lizard: 'Computer won this round!',
        alien: 'Human won this round!',
      },
      scissors: {
        rock: 'Computer won this round!',
        paper: 'Human won this round!',
        scissors: 'Draw!',
        lizard: 'Human won this round!',
        alien: 'Computer won this round!',
      },
      lizard: {
        rock: 'Computer won this round!',
        paper: 'Human won this round!',
        scissors: 'Computer won this round!',
        lizard: 'Draw!',
        alien: 'Human won this round!',
      },
      alien: {
        rock: 'Human won this round!',
        paper: 'Computer won this round!',
        scissors: 'Human won this round!',
        lizard: 'Computer won this round!',
        alien: 'Draw',
      }
    }
}
  executeClassicGame() {
    var winner = this.classicGameResults[this.human.fighter][this.computer.fighter];
    winnerHolder = winner;
    if (winner === 'Human won this round!') {
      this.human.wins++;
    }
    if (winner === 'Computer won this round!') {
      this.computer.wins++;
    }
    renderResults();
  }
  executeAdvancedGame() {
    var winner = this.advancedGameResults[this.human.fighter][this.computer.fighter];
    winnerHolder = winner;
    if (winner === 'Human won this round!') {
      this.human.wins++;
    }
    if (winner === 'Computer won this round!') {
      this.computer.wins++;
    }
    renderResults();
  }
}

//clicking the type of game will kick off the game. Which means it should create a new instance of Game.
// will put an event listener on the button section. Based on which button is clicked, it will pass through a game type.
//Defaults right now to human and computer, but can change later if i'd like to.
