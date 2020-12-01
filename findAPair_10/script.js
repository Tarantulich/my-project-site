const cards = document.querySelectorAll(".card")
let ezflipCard = false
let firstCard 
let secondCard 
let lockBoard = false
cards.forEach(card=>{
    let randomPos = Math.floor(Math.random()*12)
    card.style.order = randomPos
})

function flipCard(){
    let item = event.target.parentElement
    if(lockBoard) return lockBoard 
    if(event.target.parentElement == firstCard) return firstCard
    item.classList.add("flip")
    if(!ezflipCard){
        ezflipCard = true
        firstCard = event.target.parentElement
        return
    }
    secondCard = event.target.parentElement
    firstCard.dataset.education == secondCard.dataset.education ? disableCards():unFlipCards()
}

function disableCards(){
    firstCard.removeEventListener("click",flipCard)
    secondCard.removeEventListener("click",flipCard)
    resetBoard()
}

function resetBoard(){
    [ezflipCard,lockBoard] = [false,false]
    [firstCard,secondCard] = [null,null]
}

function unFlipCards(){
    lockBoard = true
    setTimeout(()=>{
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetBoard()},500)
}

cards.forEach(card=>card.addEventListener("click",flipCard))