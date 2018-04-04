'use strict'

//-------------- Balloon Constructor -------------//

function Balloon (parentElement) {
  var self = this;

  self.parentElement = parentElement;

  self.x = Math.floor(Math.random()*(700 - 300)+ 300);
  
  self.y = document.body.clientHeight;
  self.hasCollided = false;
  self.img = null;
  self.balloonElement = null;
  
  self.build(parentElement);
};




//------------------- Creates the balloons ---------------------//

Balloon.prototype.build = function () {
  var self = this;

  self.balloonElement = createHtml(`<div id="balloon-div">
    <img src="../version-1/images for the game/balloon/balloon-option-1.png">
    </div>`
  );

  self.parentElement.appendChild(self.balloonElement);
};

//-------------- Moves the balloon in a vertical axis--------------//

Balloon.prototype.update = function () {
  var self = this;

  self.y -= 1;
};

Balloon.prototype.render = function() {
  var self = this;

  self.balloonElement.style.left = self.x + "px";
  self.balloonElement.style.top = self.y + "px";
};
