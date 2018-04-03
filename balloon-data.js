'use strict'

//-------------- Balloon Constructor -------------//

function Balloon () {
  var self = this;
  self.x = 0;
  self.y = 0;
  self.hasCollided = false;
  self.img = null;
  self.domElem = null;
  self.speed = Game.prototype.speed;
  self.move();
};

//-------------- Moves the balloon in a vertical position--------------//


Balloon.prototype.move = function () {
  /*Need to create a time interval that moves the balloons upwards and 
  a condition that make them appear grom the bottom when they pass through the top of the screen */
};
