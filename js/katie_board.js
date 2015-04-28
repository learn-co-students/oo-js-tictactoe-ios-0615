function Board() {}
Board.prototype.init = function() {
  this.buildBoard();
}
Board.prototype.buildBoard = function() {
  var rows = this.createRowArray(3, '<div class="box-row"></div>');
  var cells = this.createColumnArray(3, '<div class="small-box"></div>');
  $('body').append(rows);
  $('.box-row').append(cells);
  this.addIds();
}
Board.prototype.createRowArray = function(size, element) {
  return this.createArray(size, element)
}
Board.prototype.createColumnArray = function(size, element) {
  return this.createArray(size, element)
}
Board.prototype.createArray = function(size, element) {
  return Array.apply(null, new Array(size)).map(String.prototype.valueOf,element)
}
Board.prototype.addIds = function() {
  $('.small-box').each(function(i, cell) {
    $(cell).attr('id', i);
  })
}
Board.prototype.updateCell = function(id, mark) {
  $("#" + id).html(mark)
}
Board.prototype.addEvents = function(game) {
  var that = this;
  $('td').click(function() {
    game.doTurn($(this).attr('id'));
  })
}