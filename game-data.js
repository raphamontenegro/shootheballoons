'use strict'

//----------- Game Constructor -----------------//

function Game () {
  var self = this;

  self.setBoard();

  self.player = new Player();

  self.arrow = new Arrow();
  self.arrowsLeft = 20;
  self.shootArrow();
  self.createArrow();

  self.speed = 1;

  self.balloons = [];
  self.createBalloon();

  self.checkCollision();
  self.winLose();
  
  self.update(event);
};

//------------------ Creates 10 Balloon objects and adds them to the balloons array ------------//

Game.prototype.createBalloon() = function () {
  var self = this;

  for (var i = 0; i < 10; i++) {
    self.balloons.push(new Balloon);
  }
};


//---------------- Shoot Arrow Method ---------//

Game.prototype.shootArrow = function () {
  var self = this;
  
  self.createArrow();
  self.arrowsLeft -= 1;
  self.update();
};


//--------- Collision Behavior-----------//

Game.prototype.checkCollision = function (arrow, balloon) {
  if (arrow.getPosition() === balloon.getPosition()) {
    Balloon.prototype.hasCollided = true;
  } else {
    Balloon.prototype.hasCollided = false;
  }
}


//---------------- Win/Lose Condition ------------------//

Game.prototype.winLose = function () {
  if (self.balloons.length === 0 && self.arrowsLeft >= 1) {
    return true;
  } else {
    return false;
  }
};


//----------------- Updates the game and all of the pieces positions ---------------/

Game.prototype.update = function (event) {
  self.player.move(event);

  self.arrow.move(event);

  self.balloons.forEach(balloon) {
    balloon.move(event);
  }
  self.checkCollision();
  self.update(); //not sure this is right
}



//------------- Ses the gridboard so the pieces can move ----------//

Game.prototype.setBoard = function () {
  var self = this;


  //------------------ For Loop that creates the divs ----------------------//

  for (var ix = 1; ix <= 100; ix++) { // I will probably increase this to 1000 divs
    var boardDiv = createHtml(`<div class="board-div"></div>`);
    boardDiv.id = ix;
    mainContent.appendChild(boardDiv);
  }
};



