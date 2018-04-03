'use strict'

//------------------ Arrow Constructor --------------//

function Arrow (x, y) {
  var self = this;
  self.x = x;
  self.y = y;
  self.img = null;
  self.domElem = null;
  self.speed = Game.prototype.speed;
  self.move();
};

//-------------- Moves the arrow in an horizontal axis--------------//


Player.prototype.move = function () {
 /*Need to create a time interval that moves the arrow horizontally and 
  a condition that removes the arrow when it gets at the end of the screen */
};