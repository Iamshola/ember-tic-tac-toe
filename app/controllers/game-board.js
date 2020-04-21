import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameBoardController extends Controller {

  @tracked playerTurn = false;

  constructor() {
    super(...arguments);
    this.playerX = []
    this.playerO = []
    this.selectedSquare = []
    this.winner = ''
    this.winningSolution = [
      ['1', '2', '3'], ['4', '5', '6'],
      ['7', '8', '9'], ['1', '4', '7'],
      ['2', '5', '8'], ['3', '6', '9'],
      ['1', '5', '9'], ['3', '5', '7']
    ]
  }

  winLogic() {
    return this.winner == 'X' ? alert('the winner is O') : alert('the winner is X')
  }

  identfyWinner() {
    if (this.winningSolution.map(x => x.every(v => this.playerO.includes(v))).includes(true) && this.playerO.length >= 3) {
      this.winner = 'O'
      this.playerO = []
      this.winLogic()
    }
    if (this.winningSolution.map(x => x.every(v => this.playerX.includes(v))).includes(true) && this.playerX.length >= 3) {
      this.winner = 'X'
      this.playerX = []
      this.winLogic()
    }
  }

  @action handleClick() {

    this.playerTurn = this.clickedBefore == true ? this.playerTurn : !this.playerTurn
    this.selectedSquare.push(event.target.id)

    if (this.playerTurn == false) {
      if (this.selectedSquare.length > 1 && this.selectedSquare.filter(x => x == event.target.id).length == 2) {
        this.clickedBefore = true
        this.selectedSquare.pop()
      } else {
        this.playerO.push(event.target.id)
        event.target.innerHTML = this.playerTurn === 'false' ? 'O' : 'X'
        this.clickedBefore = false
      }

    } else {
      if (this.selectedSquare.length > 1 && this.selectedSquare.filter(x => x == event.target.id).length == 2) {
        this.clickedBefore = true
        this.selectedSquare.pop()
      } else {
        this.playerX.push(event.target.id)
        event.target.innerHTML = this.playerTurn === 'true' ? 'X' : 'O'
        this.clickedBefore = false
      }
    }
    this.identfyWinner()
  }

}



