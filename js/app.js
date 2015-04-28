// you can ignore this file, but it gives you an example of how you might actually run this code in the browser
// if you run 'python -m SimpleHTTPServer' from the root directory it will load the tictactoe.html file.  that file has script tags which loads the required js in order
// those files draw the boards HTML and wire up the event listeners
var app = app || {};
app.board = new Board();
app.board.init();
app.game = new Game();
app.game.init(app.board);
app.board.addEvents(app.game);