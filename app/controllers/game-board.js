import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameBoardController extends Controller {

  @tracked total = false;

  constructor() {
    super(...arguments);
    this.playerX = []
    this.playerO = []
    this.winner = ''
    this.winningSolution = [
    ['1', '2', '3'], ['4', '5', '6'],
    ['7', '8', '9'], ['1', '4', '7'],
    ['2', '5', '8'], ['3', '6', '9'],
    ['1', '5', '9'], ['3', '5', '7']
  ]
 }

  winLogic(){
    return this.winner == 'X' ? alert('the winner is O') : alert('the winner is X')
  }

  @action handleClick(){

   this.total = !this.total
 
   if(this.total == false){
     this.playerO.push(event.target.id)
     event.target.innerHTML = this.total === 'false' ? 'O' : 'X'
   } else{
     this.playerX.push(event.target.id)
     event.target.innerHTML = this.total === 'true' ? 'X' : 'O'
   }

    if (this.winningSolution.map(x => x.every(v => this.playerO.includes(v))).includes(true) && this.playerO.length == 3) {
      this.winner = 'O'
      this.playerO = []
      setTimeout(this.winLogic, 300)
  
    }
    if (this.winningSolution.map(x => x.every(v => this.playerX.includes(v))).includes(true) && this.playerX.length == 3) {
      this.winner = 'X'
      this.playerX = []
      setTimeout(this.winLogic, 300)
    }
  }
}



