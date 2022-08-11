// ----- Header Component -------
const headerComponent = (logo) => {
  return `
        <header>
            <h1>${logo}</h1>
            <span class="material-icons-outlined">menu</span>
        </header>
    `;
};

// ----- Card Wrapper Component ------
const cardWrapperComponent = (cards) => {
  return `
        <div class="wrapper">${cards}</div>
    `;
};

// ------- Card Component
const cardComponent = (id, title, sub, text, button) => {
  return `
        <div class="card">
            <div class="number">${id}</div>
            <h2>${title}</h2>
            <p class="sub">${sub}</p>
            <p class="text">${text}</p>
            <button><span>${button}</span><span class="material-icons-outlined">arrow_forward</span></button>
        </div>
    `;
};

// ------ Create Card function
const createCards = (cardData, cardComponent) => {
  let result = "";
  cardData.forEach(
    (beer) =>
      (result += cardComponent(
        beer.id,
        beer.title,
        beer.sub,
        beer.text,
        beer.button
      ))
  );

  return result;
};

// ------ Load Event ------
const loadEvent = function () {
  const rootElement = document.getElementById("root");

  const beersWithIds = beers.cards.map(
    (card, index) =>
      (card = {
        id: index + 1,
        title: card.title,
        sub: card.sub,
        text: card.text,
        button: beers.button,
      })
  );

  rootElement.insertAdjacentHTML("beforeend", headerComponent(beers.logo));
  rootElement.insertAdjacentHTML("beforeend", cardWrapperComponent(createCards(beersWithIds, cardComponent)))
};

window.addEventListener("load", loadEvent);
