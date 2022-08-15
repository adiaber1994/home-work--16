let CardType = ["&#9829", "&#9829", "&#9830","&#9824"];
let counter = 0
let deck = [];
let deckFlag =[];

class card{
    constructor(number, shape, color){
        this.number = number
        this.shape = shape
        this.color = color
    }
}

while(deck.length<52){
    let randnum = Math.floor ((Math.random()*13)+1)
    let randIndex =Math.floor ((Math.random()*4))
    let color = randIndex%2===0? "black": "red";
    let FlagVal = `${CardType[randIndex], + randnum}`

    if (deckFlag.includes(FlagVal)) continue

    let cards = new card(randnum, CardType,[randIndex], color);

    deckFlag.push(FlagVal);
    deck.push(cards)
}
