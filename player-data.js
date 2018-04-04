'use strict'

//-------------- Player Constructor --------------//

function Player(parentElement) {
  var self = this;

  self.parentElement = parentElement;

  self.x = 50;
  self.y = 0;
  self.img = null;
  self.direction = null;
  self.playerElement =  null;

  self.build(parentElement);
};

//------------- Builds the player ------------//
Player.prototype.build = function () {
  var self = this;

  self.playerElement = createHtml(`<div id="player-div">
    <img src="../version-1/images for the game/archer/archer.png">
    </div>`
  );

  self.parentElement.appendChild(self.playerElement);
}

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
  self.playerElement.style.top = self.y + 'px';
};