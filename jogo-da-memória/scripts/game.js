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

function shuffleCards (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
    }

}