class Card {
  constructor (suit, rank, value) {
      this.suit = suit;
      this.rank = rank;
      this.value = value;
  }
}
class Deck {
  constructor () {
      this.deckOfCards = [];
      this.createHand();
  }

  createHand() {
      const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
      let ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
      let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

      for (let i = 0; i < suits.length; i++) {
          for (let j = 0; j < ranks.length; j++) {
                  this.deckOfCards.push(new Card(suits[i], ranks[j], values[j]));
          }
      }
  }
}
let newDeck = new Deck();

class Player {
  constructor (name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
  }
}
class StartGame {
  constructor(deck, players) {
      this.deck = deck;
      this.players = players;
  }

  shuffleCards() {
      for (let i = this.deck.deckOfCards.length - 1; i > 0; i--){
          let z = Math.floor(Math.random() * i);
          let temp = this.deck.deckOfCards[i];
          this.deck.deckOfCards[i] = this.deck.deckOfCards[z];
          this.deck.deckOfCards[z] =temp;
      }
  }

  dealCards() {
      let list = this.deck.deckOfCards;
      

          for(let i=26;i>0;i--){
          this.players[0].hand[i]=list.pop()
          this.players[1].hand[i]=list.pop()
          }
  }

  displayWinner() {
      if (score[0] > score[1]) {
          console.log(`${this.players[0].name} wins!`)
      } else if(score[0] < score[1]){
          console.log(`${this.players[1].name} wins!`)
      } else{
          console.log(`Tie. No one wins now.`)
      }
  }
  compareCards(){
      let player1Score = 0
      let player2Score = 0
      let playersScore = []

      for(let i=1;i<=26;i++){
      if(this.players[0].hand[i].value > this.players[1].hand[i].value){
          player1Score++
          console.log(`Round ${i}:
          ${this.players[0].name} has greater value.
          ${this.players[0].name}: ${this.players[0].hand[i].rank} of ${this.players[0].hand[i].suit} score: ${player1Score}
          ${this.players[1].name}: ${this.players[1].hand[i].rank} of ${this.players[1].hand[i].suit} score: ${player2Score}`)
      } else if(this.players[0].hand[i].value < this.players[1].hand[i].value){
          player2Score++
          console.log(`Round ${i}:
          ${this.players[1].name} has greater value.
          ${this.players[0].name}: ${this.players[0].hand[i].rank} of ${this.players[0].hand[i].suit} score: ${player1Score}
          ${this.players[1].name}: ${this.players[1].hand[i].rank} of ${this.players[1].hand[i].suit} score: ${player2Score}`)
      } else{
          console.log(`Round ${i}:
          It is a tie. 
          ${this.players[0].name}: ${this.players[0].hand[i].rank} of ${this.players[0].hand[i].suit} score: ${player1Score}
          ${this.players[1].name}: ${this.players[1].hand[i].rank} of ${this.players[1].hand[i].suit} score: ${player1Score}`)
      }}

      playersScore.push(player1Score, player2Score)
      return playersScore;
  }
}


let fullDeck = new Deck();
let player1 = new Player(`Das`);
let player2 = new Player(`Pownin`);

console.log(player1);
console.log(player2);

let startGame=new StartGame(fullDeck,[player1, player2])

startGame.shuffleCards();
startGame.dealCards();
score = startGame.compareCards();
startGame.displayWinner(score);