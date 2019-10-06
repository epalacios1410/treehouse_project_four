/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //create class Game
 class Game{
   //constructor does not recieve any parameters
   constructor() {
     //add properties to the constructor

     //track number incorrect guesses by user, initially zero b/c no guesses made
     this.missed = 0;
     this.phrases = this.createPhrases(); //array of Phrase objects //use "this" as we are calling the createPhrases() method on the object it belongs to, itself
     this.activePhrase = null; //Phrase object that is currently in play
   }
    //method returns an array of 5 phrase objects
    createPhrases() {
      const phrases = [
        //create five new Phrase objects
        new Phrase('Water is Natures milk'),
        new Phrase('soda is ONLY good as A chaser'),
        new Phrase('you are one crazy fruit loop'),
        new Phrase('can i be excused for the rest Of MY life'),
        new Phrase('im a good noodle'),
        new Phrase('you sound like a clogged vaccum'),
        new Phrase('early bird gets the worm BUT THE SECOND MOUSE GETS THE CHEESE')
        ];
      return phrases;
    };


    //select a random phrase and display the placeholders for the selected phrase on the screen
    startGame(){
      this.resetGame(); //reset the game
      document.querySelector('#overlay').style.display = 'none'; //hide div with id "overlay" by setting div style display to 'none'
      const phrase = this.getRandomPhrase(); //store random phrase we will be using
      phrase.addPhraseToDisplay(); //add phase to the gameboard by calling addPhraseToDisplay()
      this.activePhrase = phrase; //store the randomPhrase in the Games 'activePhrase' property
    };

    //selects and returns random phrase from phrases property
    getRandomPhrase() {
      //get a random number between 0 and length of the array of phrase objects "this.phrases"
      let phraseIndex = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[phraseIndex]; //return a phrase at index "phraseIndex"
    };


      //checks to see if the player has revealed all of the letters in the active phrase
      //returns true for a win and false otherwise
      checkForWin() {
        const phraseList = document.querySelectorAll('ul li'); //grab a hold of all the phrase letter list items
          //loop through the phraseList
          //use for loop b/c we want to stop the loop and return false once a list item w/class "hide" is found
          for(let i = 0; i < phraseList.length; i++){
            if( phraseList[i].classList.contains('hide') ){ //if current list item class name contains "hide"
              return false;
            }
          }
      };



          //Removes a life from the scoreboard
          //Checks if player has remaining lives and ends game if player is out
          removeLife() {
            const hearts = document.querySelectorAll('.tries img'); //grab a hold of the heart images
            hearts[this.missed].src = 'images/lostHeart.png'; //change heart image to show life lost
            this.missed += 1; //increase missed amount by one
            if( this.missed > 4){ //if user makes more than four misses
              this.gameOver(false); //end the game -> user lost
            }
          };

          //Displays game over message
          //parameter is a boolean value, true if game is won otherwise false
          gameOver(gameWon) {
            document.querySelector('.start').style.display = 'block'; //return to original display w/ 'block'

            if(gameWon === true){ //if user wins the game
              document.querySelector('.start').className = 'win'; //set start overlays class to 'win'
              //message for the winner
              document.querySelector('#game-over-message').innerHTML = "Hell yeah brother! You have won!";
            } else {
                document.querySelector('.start').className = 'lose'; //set start overlays class to 'lose'
                //message for the loser
                document.querySelector('#game-over-message').innerHTML = "Give it another go! You're sure to have some fun!";
            }
          };

          //handles most of the games logic
          handleInteraction(button){
            //access the textContent of the user selected button
            const checkButton = this.activePhrase.checkLetter(button.textContent); //true || false
            if( checkButton === true ){  //if the user selected button/letter is in the phrases
              button.className = 'chosen'; ///change button class to 'chosen'
              this.activePhrase.showMatchedLetter(button.textContent); //display correctly guessed button/letter
            } else {
                button.className = 'wrong'; //change button class to wrong
                this.removeLife(); //take away a life
            }
            if( this.checkForWin() !== false ){ //check to see if the game has been won
               this.gameOver(true); //end the game -> user won
            }
          };

          //method to reset the game after the user has either won or lost
          resetGame(){
            $('#overlay').addClass('start'); //give overlay begining class of 'start'
            $('#phrase ul').children().remove(); //remove all list items from the unordered list

            $('.keyrow').children().removeClass(); //remove "wrong" and "chosen" class from the keys
            $('.keyrow').children().addClass('key');

            $('.key').prop('disabled', false); //enable key by giving class "key"

            $('.tries img').attr('src', 'images/liveHeart.png'); //return all five lives to the player
          };
 }
























 //
