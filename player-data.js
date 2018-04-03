'use strict'

//-------------- Player Constructor --------------//

function Player() {
  var self = this;

  self.x = 0;
  self.y = 0;
  self.img = null;
  self.domElem = null;
  self.move();
};

//-------------- Ability to move the player --------------//

//This one is missing the condition to contain the player inside the screen

Player.prototype.move = function () {
  If (event = 'w') {
    self.y += 1;
  } else if (event = 's') {
    self.y -= 1; 
  }
};