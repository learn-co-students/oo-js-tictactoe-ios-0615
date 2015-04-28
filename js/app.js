var app = app || {};
app.board = new Board();
app.board.init();
app.game = new Game();
app.game.init(app.board);
app.board.addEvents(app.game);