lockMode = false;
firstCard = null;
secondCard = null;

techs = ['bootstrap', 
         'css',
         'electron',
         'firebase',
         'html',
         'javascript',
         'jquery',
         'mongo',
         'node',
         'react'];

cards = null;

function createCardsFromTechs() {
    cards = [];

    techs.forEach((tech) => {
        cards.push(createPairFromTech(tech));
    })
    cards = cards.flatMap(pair => pair);
    shuffleCards();
    return cards;
}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }

}