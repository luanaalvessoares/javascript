let game = {
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
    };


    function checkMatch() {
        if (!firstCard || !secondCard) {
            return false;
        }
        return firstCard.icon === secondCard.icon;
    };


    function clearCards() {
        firstCard = null;
        secondCard = null;
        lockMode = false;
    };


    function unflipCards() {
        firstCard.flipped = false;
        secondCard.flipped = false;
        clearCards();
    };


    function checkGameOver() {
        return cards.filter(card => !card.flipped).length == 0;
    };


    function createCardsFromTechs() {
        cards = [];

        techs.forEach((tech) => {
            cards.push(createPairFromTech(tech));
        })
        cards = cards.flatMap(pair => pair);
        shuffleCards();
        return cards;
    };


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
    };


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
}
