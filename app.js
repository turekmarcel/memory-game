const cards = document.querySelectorAll('.memory-card')
let lockBoard = false;
let hasFlippedCard = false;
let foodId
let firstCard, secondCard;
let orderNumber;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip')
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    } else {

        hasFlippedCard = false;
        secondCard = this;
        checkForMatch()
    }

}

function checkForMatch(){
    let isMatch = firstCard.dataset.food === secondCard.dataset.food;

    isMatch ? disableCards() : unFlipCards()
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
    }, 1500)
}

function shuffle(){
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 12)
        card.style.order = randomNumber;
    })
}

shuffle()
cards.forEach(card => card.addEventListener('click', flipCard))