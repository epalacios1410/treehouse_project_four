/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//create a game variable that will be used
let game;
//add click event listener to button which begins game
//button has id of "btn__reset"
document.querySelector('#btn__reset').addEventListener( 'click', () => {
  game = new Game(); //instantantiate a new Game object with the "game" variable
  game.startGame(game); //call the startGame() method on the new Game object
});



//using event deligation add an event handler to the "qwerty" keyboard
document.querySelector('#qwerty').addEventListener( 'click' , event => {
  let button = event.target; //grab event target, user selected button
  if( button.classList.contains('key') ) { //if a button with class key is selected
        game.handleInteraction(button); //call handler() method
  }
});











//
