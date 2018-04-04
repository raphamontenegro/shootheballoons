'use strict'
var SPEED = 1;

//----------- Game Constructor -----------------//

function Game (parentElement) {
  var self = this;

  self.parentElement = parentElement;
  self.gameScreenElement = null;

  self.player = null;

  self.arrow = null;
  self.arrowsLeft = 20;
  
  self.balloons = [];

  self.intervalId = null;
  
  self.score = 0;
};

//---------------------------- Creates the game -------------------------//

Game.prototype.build = function () {
  var self = this;

  self.gameScreenElement = createHtml(`<div id="game-screen">
    </div>`
  );
  

  self.parentElement.appendChild(self.gameScreenElement);

  self.handleKeyDown = function (event) {
    self.handleActions(event);
  }

  self.player = new Player(self.gameScreenElement);

  self.createBalloons();

  document.addEventListener("keydown", self.handleKeyDown);
  
  self.start();
} 


//------------------ Handles all the event listeners of the game ----------------//
Game.prototype.handleActions = function (event) {
  var self = this;
  console.log(event.key);
  
  if (event.key === ' ') {
    self.shootArrow();
  }

  if (event.key === 'ArrowUp') {
    self.player.direction = 'up';
  } else if (event.key === 'ArrowDown') {
    self.player.direction = 'down';
  }

}


//--------------------- Checks if the game has ended --------------------//
Game.prototype.onEnded = function (cb) {
  var self = this;
  self.callback = cb;
}



//-------------- Win/Lose Condition ----------------------//

Game.prototype.isWin = function() {
  var self = this;
  if (self.balloons.length === 0) {
    return true;
  } else {
    return false;
  }
};

//------------------ Creates 10 Balloon objects and adds them to the balloons array ------------//

Game.prototype.createBalloons = function () {
  var self = this;

  

  for (var i = 0; i < 10; i++) {
    self.balloons.push(new Balloon(self.gameScreenElement));
  };

};


//---------------- Shoot Arrow Method ---------//

Game.prototype.shootArrow = function () {
  var self = this;
  if (!self.arrow) {
    console.log("ok")
    self.createArrow();
    self.arrowsLeft -= 1;
  }
};


//-------------- Creates a new Arrow -----------------//

Game.prototype.createArrow = function () {
  var self = this;

  self.arrow = new Arrow(self.gameScreenElement, self.player.x, self.player.y);
}


//--------- Collision Behavior-----------//

Game.prototype.checkCollision = function () {
  var self = this;

  if (self.arrow && self.arrow.x > document.body.clientWidth) {
    self.arrow = null;
  };

  self.balloons.forEach(function(balloon) {
    if (balloon.y <= 0) {
      balloon.y = document.body.clientHeight;
    }
  });

    if (self.player.y <= 0) {
      self.player.y =0
    } else if (self.player.y >= document.body.clientHeight) {
      self.player.y = document.body.clientHeight;

    }
  };
  // if (arrow.move() === balloon.move()) {
  //   Balloon.prototype.hasCollided = true;
  // } else {
  //   Balloon.prototype.hasCollided = false;
  // }



//---------------- Checks if the game has ended ------------------//

Game.prototype.isOver = function () {
  var self = this;
  if (self.balloons.length === 0 || self.arrowsLeft === 0) {
    console.log("ended");
    return true;
  } else {
    return false;
  }
};


//----------------- Updates the game and all of the pieces positions ---------------/

Game.prototype.update = function() {
  var self = this;
  self.checkCollision();
  self.player.update();

  if (self.arrow) {
    self.arrow.update();
  }

  self.balloons.forEach(function (balloon) {
    balloon.update();
  });

};


//---------------- Renders the objects of the game ------------------//

Game.prototype.render = function () {
  var self = this;
  self.player.render();

  if (self.arrow) { 
    self.arrow.render();
  }

  self.balloons.forEach(function(item) {
    item.render();
  })
}


//------------------- Starts the game -----------------------//

Game.prototype.start = function () {
  var self = this;
  self.intervalId = window.setInterval(function (){
    self.update();
    self.render();
    //debugger;
    if (self.isOver()) {
      self.callback(self.isWin());
      clearInterval(self.intervalId);
    }
  }, 10)
};
