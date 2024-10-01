document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'lidia',
        img: './img/lidia1.webp'
      },
      {
        name: 'bs',
        img: './img/bs.webp'
      },
      {
        name: 'bob',
        img: './img/bob.webp'
      },
      {
        name: 'pesbj',
        img: './img/pesbj.jpg'
      },
      {
        name: 'bjd',
        img: './img/bjd.jpg'
      },
      {
        name: 'dolores',
        img: './img/dolores.jpg'
      },
      {
        name: 'bjd',
        img: './img/bjd.jpg'
      },
      {
        name: 'pesbj',
        img: './img/pesbj.jpg'
      },
      {
        name: 'dolores',
        img: './img/dolores.jpg'
      },
      {
        name: 'bs',
        img: './img/bs.webp'
      },
      {
        name: 'lidia',
        img: './img/lidia1.webp'
      },
      {
        name: 'bob',
        img: './img/bob.webp'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#acertos')
    const errorDisplay = document.querySelector('#erros')
    const errorTitle = document.querySelector('#erro')
    const acertoTitle = document.querySelector('#acerto')
    const btnreiniciar = document.querySelector("#botao-reiniciar") //botão
    let  erro = 0;
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/bj1.jfif') //mudar o fundo da carta
        card.setAttribute('data-id', i) //add histórico de pesquisa (procura de atributo especifico)
        card.addEventListener('click', flipCard) //ao clicar a carta gira
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      // verifica se ao clicar captura um id (0 ou 1)
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/bj1.jfif')
        cards[optionTwoId].setAttribute('src', 'img/bj1.jfif')
        alert('Você clicou na mesma imagem!')
        erro++
        errorDisplay.textContent = " " + erro
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Você encontrou!')
        cards[optionOneId].setAttribute('src', 'img/vermedeareia.jpg')
        cards[optionTwoId].setAttribute('src', 'img/vermedeareia.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'img/bj1.jfif')
        cards[optionTwoId].setAttribute('src', 'img/bj1.jfif')
        alert('Desculpe, tente novamente!')
        erro++
        errorDisplay.textContent = " " + erro
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent =" " + cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        acertoTitle.style.textContent = " "
        errorDisplay.style.display = "none"
        errorTitle.style.display = "none"
        resultDisplay.textContent = ' Parabéns! Você encontrou todos eles!'
        btnreiniciar.style.display = 'flex' //botão
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
 
  //botão de reiniciar

  function reiniciarpagina() {
    location.reload();
  }

