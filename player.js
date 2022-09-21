class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;

  }
  takeTurn(fighter) {
    this.fighter = fighter;
    computerTakeTurn();
  }
}

//will need event listener for the fighters. Will trigger the takeTurn event handler.
