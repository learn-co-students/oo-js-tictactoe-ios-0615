function Game() {};
Game.prototype.init = function (board) {
  this.turn = 0;
  this.board = board;
  this.createState();
}
Game.prototype.checkCells = function(ary) {
  for(var i = 0; i < ary.length; i++) {
    if(this.state[ary[i]] != this.player()) {
      return false;
    }
  }
  return true;
}
Game.prototype.checkWinner = function() {
  var ary = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  for(var i = 0; i < ary.length; i++) {
    if(this.checkCells(ary[i]) == true) {
      return true;
    }
  }
  return false;
}
Game.prototype.player = function() {
  if(this.turn % 2 == 0) {
    return "X";
  }
  else {
    return "O";
  }
}
Game.prototype.doTurn = function(id){
  // increment turn
  this.turn++;
  // update our boards state
  this.updateState(id);
  if(this.checkWinner() == true) {
    alert("You Won!");
  }
}
Game.prototype.updateState = function(id) {
  var mark = this.state[id] = this.player()
  this.board.updateCell(id, mark);
}

Game.prototype.createState = function() {
  var ary = []; // new Array();
  for(var i = 0; i <= 9; i++) {
    ary.push(null);
  }
  this.state = ary;
}