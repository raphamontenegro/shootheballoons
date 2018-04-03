'use strict'

//-------------- Player Constructor --------------//

function Player() {
  var self = this;

  self.x = 0;
  self.y = 0;
  self.img = null;
  self.direction = null;
  self.domElem = document.querySelector('#player-div');
  
};

//-------------- Ability to move the player --------------//

//This one is missing the condition to contain the player inside the screen

Player.prototype.setDirection = function(direction) {
  var self = this;  
  self.direction = direction;
};

Player.prototype.update = function () {
  var self = this;
  if (self.direction === 'down') {
    self.y += 1;
  } else if( self.direction === 'up') {
    self.y -=1;
  }
};

Player.prototype.render = function() {
  var self = this;
  self.domElem.style.top = self.y + 'px';
};