lockMode = false;
firstCard = null;
secondCard = null;

cards = null;

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

function setCard(id) {
    let card = cards.filter(card => card.id === id)[0];
    console.log(card);
    if (card.flipped || lockMode) {
        return false;
    }

    if (!firstCard) {
        firstCard = card;
        firstCard.flipped = true;
        return true;
    } else {
        secondCard = card;
        secondCard.flipped = true;
        lockMode = true;
        return true;
    }
}


function checkMatch() {
    if (!this.firstCard || !this.secondCard) {
        return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
}


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