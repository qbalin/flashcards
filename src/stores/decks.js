import idb from 'idb';

const initialState = {};

const SET_DECKS = 'SET_DECKS';
const SET_CURRENT_DECK = 'SET_CURRENT_DECK';

const setDecks = decks => ({ type: SET_DECKS, decks });
const setCurrentDeck = deck => ({ type: SET_CURRENT_DECK, deck });

export const loadDecks = () => (dispatch) => {
  const dbPromise = idb.open('flashcards');
  dbPromise.then((db) => {
    const tx = db.transaction('decks', 'readonly');
    const store = tx.objectStore('decks');
    return store.getAll();
  }).then((decks) => {
    console.log('decks', decks);
    dispatch(setDecks(decks));
  });
};

const getDeck = deckId => {
  const dbPromise = idb.open('flashcards');

  return dbPromise.then((db) => {
    const tx = db.transaction('decks', 'readonly');
    const store = tx.objectStore('decks');
    return store.get(deckId)
  })
}

const getCards = deckId => {  
  const dbPromise = idb.open('flashcards');
  return dbPromise.then((db) => {
    const tx = db.transaction('cards', 'readonly');
    const store = tx.objectStore('cards');
    const index = store.index('deckId');
    return index.openCursor(IDBKeyRange.only(deckId));
  }).then(function showRange(cursor, cards = []) {
    if (!cursor) { return cards; }
    cards.push(cursor.value);
    return cursor.continue().then(cursor => showRange(cursor, cards));
  })
}

const getSides = cardId => {  
  const dbPromise = idb.open('flashcards');
  return dbPromise.then((db) => {
    const tx = db.transaction('sides', 'readonly');
    const store = tx.objectStore('sides');
    const index = store.index('cardId');
    return index.openCursor(IDBKeyRange.only(cardId));
  }).then(function showRange(cursor, sides = []) {
    if (!cursor) { return sides; }
    sides.push(cursor.value);
    return cursor.continue().then(cursor => showRange(cursor, sides));
  })
}

export const loadFullDeck = (deckId) => async (dispatch) => {
  const deck = await getDeck(deckId);
  const cards = await getCards(deckId);
  const sides = await Promise.all(cards.map(async card => await getSides(card.id)));

  sides.flatten().forEach(side => {
    const card = cards.find(c => c.id === side.cardId)
    if (!card.sides) {
      card.sides = [];
    }
    card.sides.push(side);
  });


  deck.cards = cards;
  dispatch(setCurrentDeck(deck));
};

export default function allDecks(state = initialState, action) {
  switch (action.type) {
    case SET_DECKS:
      return Object.assign({}, state, {decks: action.decks});
    case SET_CURRENT_DECK:
      return Object.assign({}, state, {currentDeck: action.deck});
    default:
      return state;
  }
}
