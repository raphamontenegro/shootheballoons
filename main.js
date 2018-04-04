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

    
  var gameScreen = null;
  var playerDiv = null;
  var arrowDiv = null;
  var balloonDiv = null;
  var handleKeyDown = null;

  function buildGameScreen() {
    
    gameScreen = createHtml(`<div id="game-screen">
      <div id="player-div">
        <img src="../version-1/images for the game/archer/archer.png">
      </div>
      <div id="arrow-div">
        <img src="../version-1/images for the game/arrow/Arrow.gif">
      </div>
      <div id="balloon-div">
        <img src="../version-1/images for the game/balloon/balloon-option-1.png">
      </div>
    </div>`)

    mainContent.appendChild(gameScreen);

    var game = new Game();

    game.onEnded(function(isWin) {
      endGame(isWin);
    });

    handleKeyDown = function (event) {
      game.handleKeyDown(event);
    }

    document.body.addEventListener('keydown', handleKeyDown);
      
    // balloonDiv  Should I create a balloon div or just put the balloon inside of the numbered divs?

  };


  //--------------- Kills the game screen -----------------//

  function destroyGameScreen() {
    gameScreen.remove();
    document.removeEventListener("keydown", handleKeyDown);
  };


  //------------ Finishes the game and loads the End Game screen --------------------//

  function endGame(isWin) {
    destroyGameScreen();
    buildEndGameScreen(isWin);
  };

  var endGameScreen = null;
  var restartGameButton = null;

  //---------- creates the end game screen ---------------//

  function buildEndGameScreen(isWin) {
    //if (game.winLose = true) {
      if (isWin) {
      endGameScreen = createHtml(` <div id="end-game">
      <h2 class="win">Yaaaaay!! You rock!</h2>
       <div class ="button-div">><button>Click here to play again</button></div>
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


//------------------ For Loop that creates the divs ----------------------//
/*
for (var ix = 1; ix <= 100; ix++) {
    var boardDiv = createHtml(`<div class="board-div"></div>`);
    boardDiv.id = ix;
    mainContent.appendChild(boardDiv);
  }
  */
  
