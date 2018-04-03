'use strict'

//------------------ Arrow Constructor --------------//

function Arrow (playerPositionX, playerPositionY) {
  var self = this;
  
  self.x = playerPositionX;
  self.y = playerPositionY;

  self.speed = SPEED;
  self.img = null;
  self.domElem = document.querySelector("#arrow-div");;
};

//-------------- Moves the arrow in an horizontal axis--------------//


Arrow.prototype.update = function () {
  var self = this;
  self.x += 1 * self.speed;
};

Arrow.prototype.render = function() {
  var self = this;
  self.domElem.style.left = self.x + "px";
  self.domElem.style.top = self.y + "px";
};