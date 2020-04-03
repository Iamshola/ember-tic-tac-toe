import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameBoardController extends Controller {

  // false = O 
  @tracked total = false;

  constructor() {
    super(...arguments);
    this.playerX = []
    this.playerO = []
    this.winningSolution = [
    ['1', '2', '3'], ['4', '5', '6'],
    ['7', '8', '9'], ['1', '4', '7'],
    ['2', '5', '8'], ['3', '6', '9'],
    ['1', '5', '9'], ['3', '5', '7']
  ]
 }

  winLogic(){
    if (this.win == true) {
      alert('the winner is ' + this.total)
    }
    
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

    if (this.winningSolution.map(x => x.every(v => this.playerO.includes(v))).includes(true)) {
      this.win = true
      this.playerO = []
    }
    if (this.winningSolution.map(x => x.every(v => this.playerX.includes(v))).includes(true)) {
      this.win = true
      this.playerX = []
    }
    
    this.winLogic()

  }






}



