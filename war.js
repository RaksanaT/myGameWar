function createDeck () {
    
    const suits = [' of Hearts', ' of Clubs', ' of Diamonds', ' of Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let deck = [];
    let player1 = "player1";
    let player2 = "player2";

    for (var suitCounter = 0; suitCounter < 4; suitCounter++){
        for (var rankCounter = 0; rankCounter < 13; rankCounter++){
            deck.push(ranks[rankCounter] + suits[suitCounter]);
        
        }
    }
    return (deck);
}

function shuffleDeck(deck){
    for (i = 0; i < 52; i++) {
        var tempCard = deck[i];
        var randomCard = Math.floor(Math.random() * 52);
        deck[i] = deck[randomCard];
        deck[randomCard] = tempCard;
    }

}
// that's all I could think of





  