---
language: JavaScript, js
tags: selectors, jquery, oo
type: lab
resources: 3
---

# Object Oriented Tic-Tac-Toe with jQuery

## Contents

![tic-tac-toe](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/small-tic-tac-toe.png)

* Objective
* Lab Structure
* Running Your Server
* Testing Suite
* Resources

## Objective

You'll be using JavaScript to make a two-player tic-tac-toe game.

## Lab Structure

Here is the structure for this lab:

```
├── js
│   ├── app.js
│   ├── board.js
│   └── game.js
├── lib
│   └── jasmine-jquery.js
├── spec
│   ├── board.spec.js
│   └── game.spec.js
└── tictactoe.html
```

#### JavaScripts

* JS Folder
  * The files in this folder draw the boards HTML and wire up the event listeners.
  * The `board.js` file is in charge of all things board-related:
    * It should create the tic-tac-toe board.
    * It also should contain a listener for clicks.
    * It should be able to add "x"es and "o"s to the board.
  * The `game.js` file is in charge of all things game-related:
    * It should check for winners.
    * It should handle turns.
  * The `app.js` file gives you an example of how you might actually run this code in the browser but you can mostly ignore it.
* Lib Folder
  * This folder holds the testing suite's version of jQuery. You can ignore this file, it's used only for the tests.
* Spec Folder
  * The testing suite has been divided into two files: the first tests `board.js` and the second tests `game.js`.

#### Markup

The `tictactoe.html` file has script tags that load the JavaScript files in order. First, `board.js` is loaded, then the `game.js`, followed by `app.js`.

## Running your Server

When you run `python -m SimpleHTTPServer` from the root directory, the Python server will load the `tictactoe.html` file. Then in your browser use [http://localhost:8000/](http://localhost:8000/). 

## Note on the Testing Suite

This lab uses Jasmine tests. To run the Jasmine tests, type `ironboard` or `ironboard -b`. 

To use `debugger`, add `debugger;` to your code, save, and run `ironboard -b`. In your browser, open your JavaScript console (right click, select "Inspect Element", then click "cosole" *or* `⌘ command` + `option` + `J`). Then refresh the browser (click "Refesh" *or* `⌘ command` + `R`).

## Resources

* [Intro to OO JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
* [jQuery API - Selectors](http://api.jquery.com/category/selectors/)
* [jQuery API - Events - Click](http://api.jquery.com/click/)
