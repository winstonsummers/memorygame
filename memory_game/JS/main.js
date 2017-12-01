console.log("Up and running!");

var cards= [
	{
	rank: "queen",
	suit: "hearts",
	cardImg: "../images/queen-of-hearts.png"
	}
	{
	rank: "queen"
	suit: "diamonds",
	cardImg: "../images/queen-of-diamonds.png"
	}
	{
	rank: "king",
	suit: "hearts",
	cardImg: "../images/king-of-hearts.png"
	}
	{
	rank: "king",
	suit: "diamonds",
	cardImg "../images/king-of-diamonds.png"
	}
];

var cardsInPlay = [] ;

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards.rank);
	console.log(cards.suit);
	console.log(cards.cardImg);
	cardsInPlay.push(cards.rank);
};


var createBoard = function() {
		for (var i = 0; i < cards.length; i++) {
			return cards.cardImg;
		var cardElement= document.createElement("img").setAttribut("src", "../images/back.png").setAttribut("data-id", "i");
		addeventlistener("click", flipCard());
		cardElement.appendChild("game-board");
	}
};
	
	if (cardsInPlay.length === 2) {
		console.log("2 cards") 
		checkForMatch()
	// } else if (cardsInPlay[0] === cardsInPlay[2]) {
	// 	alert("You found a match!")
	// } else {
	// 	alert("Sorry, try again.")
	}
}

createBoard();