window.addEventListener("load", function(event) {

  "use strict";

      ///////////////////
    //// FUNCTIONS ////
  ///////////////////

  //I define render and update functions here
  //render function is gonna be called on every frame of my game loop
  var render = function() {

  //we are going to communicate the game's color value to the display
  //and I'm gonna have the display object draw that color value to the on screencanvas
    display.renderColor(game.color);
    display.render();

  };

  var update = function() {

  //it's gonna tell the game to change the color value and that's what the update function
  //the game does just increment this color value in a random direction gradually to change the color
  
    game.update(); 

  };

        /////////////////
      //// OBJECTS ////
    /////////////////

    /* Usually I just write my logical sections into object literals, but the temptation
    to reference one inside of another is too great, and leads to sloppy coding.
    In an effort to attain cleaner code, I have written classes for each section
    and instantiate them here. */

	//and each one of these handles each own business and it's totally separate from the other
	//so we are not gonna have controller logic reference inside of the game
	
	//model view controller architecture where you separate your game logic from your display
	//logic and you also separate out your controller logic
    /* The controller handles user input. */
	//the controller logic in the Controller class
    var controller = new Controller();
	//display logic in the Display class
    /* The display handles window resizing, as well as the on screen canvas. */
    var display    = new Display(document.querySelector("canvas"));
    /* The game will eventually hold our game logic. */
	//we have our game logic stored in the Game class
    var game       = new Game();
    /* The engine is where the above three sections can interact. */
	//I define my engine it's gonna run at 30 frames per second and I'm handing in the render and 
	//update function
    var engine     = new Engine(1000/30, render, update);

        ////////////////////
      //// INITIALIZE ////
    ////////////////////

    window.addEventListener("resize",  display.handleResize);
    window.addEventListener("keydown", controller.handleKeyDownUp);
    window.addEventListener("keyup",   controller.handleKeyDownUp);

    display.resize();
	//I'm gonna start my engine that's gonna execute the render and update function 30 times per
	//second until I stop my game engine
    engine.start();

});