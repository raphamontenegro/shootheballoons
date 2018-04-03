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
      <button>Start game </button>
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

    // var game = new Game ();
    var gameScreen = null;

    function buildGameScreen() {
    gameScreen = createHtml(`<div id="game">
      <div id="player-div">
        <img src="https://cdn.dribbble.com/users/77598/screenshots/3927561/archer_pigeon_dribbble2_1x.png">
      </div>
      <div id="arrow-div">
        <img src="http://www.arrowlife.com/assets/images/logo.png">
      </div>
      <div id="balloon-div">
        <img src="https://www.altoastral.com.br/wp-content/uploads/2016/05/mortes-mais-bizarras-ultimos-tempos-5-750x500.jpg">
      </div>
    </div>`)

    mainContent.appendChild(gameScreen);
    window.setTimeout (endGame, 6000);
  };


  //--------------- Kills the game screen -----------------//

  function destroyGameScreen() {
    gameScreen.remove()
  };


  //------------ Finishes the game and loads the End Game screen --------------------//

  function endGame() {
    destroyGameScreen();
    buildEndGameScreen();
  };

  var endGameScreen = null;
  var restartGameButton = null;

  //---------- creates the end game screen ---------------//

  function buildEndGameScreen() {
    //if (game.winLose = true) {
      if (true) {
      endGameScreen = createHtml(` <div id="end-game">
      <h2 class="win">Yaaaaay!! You rock!</h2>
      <button>Click here to play again</button>
    </div>`);
    } else {
      endGameScreen = createHtml(` <div id="end-game">
      <h2 class="lose">You better get yourself some glasses.</h2>
      <button>Click here to play again</button>
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
  
