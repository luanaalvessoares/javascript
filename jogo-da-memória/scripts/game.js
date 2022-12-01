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

function createPairFromTech(tech) {
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}


function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000);
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