'use strict';

describe('board', function() {
  var board;
  beforeEach(function() {
    board = new Board();
  });

  describe( "#createRowArray", function() {
    it("should do return an array of size x filled the element passed to it", function() {
      expect(board.createRowArray(3, "<tr>").toEqual(["<tr>", "<tr>", "<tr>"]);
    });     
  });

  // describe( "#hashtagblake", function() {
  //   it("should do something", function() {
  //     expect(model.get("color").toEqual("blue");
  //   });     
  // });  
});
