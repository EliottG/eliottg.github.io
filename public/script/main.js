let cards = document.querySelectorAll('.card');

let cardsShuffle = [];

let maxCards = [];

let selectedCards = [];

let cardsFound = [];

let gameStatus = document.getElementById('game-status');

let modalFinish = document.getElementById('modal-finish');

let loading = false;

let main = document.querySelector('main');

const card = 'card';



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function compareCards(selectedCards) {
    return selectedCards[0].icon === selectedCards[1].icon
}


function displayAnimation(index) {
    cards[index].animate([
        // étapes/keyframes
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(1)' }
      ], {
        // temporisation
        duration: 300,
      });
}

function foundAnimation(index) {
    cards[index].animate([
        // étapes/keyframes
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(0.5)' },
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(1)' }
        


    ], {
        // temporisation
        duration: 400,
      });
}

function displayCard(index) {
    if (loading || cardsFound.includes(index)) {
        return
    }
    
    if (selectedCards[0] && selectedCards[0].index === index) {
        return
    }

    selectedCards.push(cardsShuffle[index])
    cards[index].classList.add(card + cardsShuffle[index].icon);
    cards[index].classList.remove('hidden');
    
    if (selectedCards.length >= 2) {
        
        let compareOne = selectedCards[0];
        let compareTwo  = selectedCards[1];
        
        

        if(compareCards(selectedCards)) {
            cards[compareOne.index].classList.add('found');
            cards[compareTwo.index].classList.add('found');
            
            foundAnimation(compareOne.index);
            foundAnimation(compareTwo.index);
            cardsFound.push(compareOne.index,compareTwo.index);
        } else {
            displayAnimation(index)
            loading = true;
            
            setTimeout(() => {
                cards[compareOne.index].classList.add('hidden');
                cards[compareTwo.index].classList.add('hidden');
                  
                displayAnimation(compareTwo.index)
                displayAnimation(compareOne.index)
                cards[compareTwo.index].classList.remove(card + compareTwo.icon); 
                cards[compareOne.index].classList.remove(card + compareOne.icon);
                loading = false;
            }, 475)
        }
        
        selectedCards = [];
        if(cardsFound.length >= cardsShuffle.length) {
            gameStatus.innerHTML = 'Partie terminée !'
        }
    } else {
        displayAnimation(index)
    }
    
}

for(let i = 0; i < cards.length / 2; i++) {
    maxCards.push(i,i);
}



cards.forEach((card, index) => {
    let cardIndex = getRandomInt(maxCards.length);
    cardsShuffle.push({
        index,
        icon: maxCards[cardIndex]
    })
    maxCards.splice(cardIndex, 1)

    card.addEventListener('click', () => displayCard(index))
})

