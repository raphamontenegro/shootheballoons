'use strict'
var SPEED = 1;

//----------- Game Constructor -----------------//

function Game () {
  var self = this;

  self.player = new Player();

  self.arrow = null;
  self.arrowsLeft = 20;

  self.balloons = [1];

  self.intervalId = null;
  
  self.start();
};


Game.prototype.handleKeyDown = function (event) {
  var self = this;
  console.log(event.key)
  
  if (event.key === ' ') {
    self.shootArrow();
  }

  if (event.key === 'ArrowUp') {
    self.player.direction = 'up';
  } else if (event.key === 'ArrowDown') {
    self.player.direction = 'down';
  }

}

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

Game.prototype.createBalloon = function () {
  var self = this;

  // for (var i = 0; i < 10; i++) {
  //   self.balloons.push(new Balloon);
  // }
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

  self.arrow = new Arrow(self.player.x, self.player.y);
}


//--------- Collision Behavior-----------//

Game.prototype.checkCollision = function (arrow, balloon) {
  // if (arrow.move() === balloon.move()) {
  //   Balloon.prototype.hasCollided = true;
  // } else {
  //   Balloon.prototype.hasCollided = false;
  // }
}


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
  self.player.update();

  if (self.arrow) {
    self.arrow.update();
  }

  //   self.balloons.forEach(balloon) {
  //     balloon.update();
  //   }
  // */
  // self.checkCollision();
}


//---------------- Renders the objects of the game ------------------//
Game.prototype.render = function () {
  var self = this;
  self.player.render();

  if (self.arrow) { 
    self.arrow.render();
  }

//   self.balloons.forEach(balloon) {
//     balloon.render();
//   }
// */
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
