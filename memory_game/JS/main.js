console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"] ;
var cardsInPlay = [] ;

var cardOne = cards[0] ;
cardsInPlay.push(cardOne) ;

var cardTwo = cards[2] ;
cardsInPlay.push(cardTwo) ;

if (cardsInPlay.length === 2) {
	console.log("2 cards") 
} else if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}