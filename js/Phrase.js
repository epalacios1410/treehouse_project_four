/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //create the Phase class
 class Phrase{
   //constructor has one parameter "phrase"
   constructor(phrase) {
     this.phrase = phrase.toLowerCase(); //set phrases toLowerCase()
   }

   //method to add letter placehholders to the display when the game starts
   //one list item per letter
   //"letter" class for letters
   //"space" class for spaces
   addPhraseToDisplay(){
     //use firstElementChild() to  grab the unordered list
     const ul = document.querySelector('#phrase').firstElementChild;
     //split phrase into an array of each of its characters using the split() method
     const splitPhrase = this.phrase.split('');


     const iterateChars = splitPhrase.forEach( char => {  //iterate over the splitPhrase array

       let newLi = document.createElement('li'); //for each element create the list item to add to the unordered list
       if( char === ' '){ //if the charater is a space
         newLi.className = 'space'; //set class name to "space"
         ul.append(newLi); //append new list item to the unordered list
       } else {
          newLi.innerText = char; //set innerText of the new list item to the character
          newLi.className = 'hide letter ' + char; //set class name to "hide letter" + char
          ul.append(newLi); //append new list item to the unordered list
       }
     });
   };
    //check to see if user selected letter is in the phrase
    checkLetter(letter){ //parameter is a string
        if( this.phrase.includes(letter) ){ //if letter is in the phrase in play
          return true;
        } else {
          return false;
        }
    }
      //if the letter is in the phrase display the letter to the screen
      showMatchedLetter(letter){
        //grab all phrase list item letters that were added to the document
        //use querySelectorAll to get the entire list items list
        const lettersLi = document.querySelectorAll('ul li'); //get list items from the unordered list
        //loop through the list  of letters
        lettersLi.forEach( charLetter => {
          if( charLetter.classList.contains(letter) ){ //if the current charLetters class name contains the "letter"
            charLetter.removeAttribute('class'); //remove its current class
            charLetter.setAttribute('class', 'show'); //give CSS style class "show", will display to the screen
          }
        });
      }
 }
