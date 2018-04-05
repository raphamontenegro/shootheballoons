'use strict'

//Robado del boiler plate de André

function createHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.children[0];
}

function main () {
 var mainContent = document.getElementById("main-content");

  
  
  //--------------Intro and Instructions Screen--------//
  
  var introScreen = null;
  var startGameButton = null;
  
  //--------------- Kills the splash screen and loads the game screen ----------//
  
  function handleStartGame() {
    destroyIntroScreen();
    buildGameScreen();
  };

  //----------------------Opens Intro screen ------------------//
  
  function buildIntroScreen(){
    
    introScreen = createHtml(`<div id="intro">
      <h1>Shoot the balloons and have fun</h1>
      <div class ="button-div"><button>Start game </button></div>
      <div id="instructions">
        <p>Move the archer vertically with the up and down keys.</p>
        <p>Shoot the arrow hitting the space bar</p>
        <p>If you run out of arrows, you suck.</p>
      </div>
    </div>`);

    mainContent.appendChild(introScreen);
    startGameButton = introScreen.querySelector("button");
    startGameButton.addEventListener("click", handleStartGame);
  };
    
  
  //-------------Leaves the Intro screen and removes the button  event listener ----------------------//
  
  function destroyIntroScreen() {
    introScreen.remove();
    startGameButton.removeEventListener('click', handleStartGame);
  };


  //----------------Adds the the game div with the whole game.-----------------//

  function buildGameScreen() {
    var game = new Game(mainContent);
    game.build();
  
    game.onEnded(function(isWin, score) {
      endGame(isWin, score);
    });
  };
  

  //------------ Finishes the game and loads the End Game screen --------------------//

  function endGame(isWin, score) {
    // destroyGameScreen();
    buildEndGameScreen(isWin, score);
  };

  var endGameScreen = null;
  var restartGameButton = null;

  //---------- creates the end game screen ---------------//

  function buildEndGameScreen(isWin, score) {
      if (isWin) {
      endGameScreen = createHtml(` <div id="end-game">
      <h2 class="win">Yaaaaay!! You rock!</h2>
      <h2>You scored `+score+`</h2>
       <div class ="button-div"><button>Click here to play again</button></div>
    </div>`);
    } else {
      endGameScreen = createHtml(` <div id="end-game">
      <h2 class="lose">You better get yourself some glasses.</h2>
      <div class="button-div"><button>Click here to play again</button></div>
      </div>`);
    }

    mainContent.appendChild(endGameScreen);
    restartGameButton = endGameScreen.querySelector('button');
    restartGameButton.addEventListener('click', restartGame);
  };


  function destroyEndGameScreen() {
    endGameScreen.remove();
    restartGameButton.removeEventListener('click', restartGame);
  };

  //------------------- restarts the game -------------//
  function restartGame() {
    destroyEndGameScreen();
    buildIntroScreen();
  };

  //--------------Start the game--------------//

  buildIntroScreen();
  
};

window.addEventListener("load", main);  
