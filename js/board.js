function Board() {}
Board.prototype.init = function() {
  this.buildBoard();
  this.addIds();
}
Board.prototype.buildBoard = function() {
  var rows = this.createRowArray(3, '<tr>');
  var cells = this.createColumnArray(3, '<td></td>');
  $("body").append("<table border='1' cellpadding='40'></table>")
  $('table').append(rows);
  $('tr').append(cells);
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
  $('td').each(function(i, cell) {
    $(cell).attr('id', i);
  })
}
Board.prototype.updateCell = function(id, mark) {
  $("#" + id).html(mark)
}
Board.prototype.addEvents = function(game) {
  var that = this;
  $('td').click(function() {
    var id = Number($(this).attr('id'));
    game.doTurn(id);
  })
}