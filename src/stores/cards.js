import idb from 'idb';

const initialState = [];

const SET_CARDS = 'SET_CARDS';

const setCards = cards => ({ type: SET_CARDS, cards });

export const loadCards = (deckId) => (dispatch) => {
  const dbPromise = idb.open('flashcards');
  return dbPromise.then(function(db) {
    var tx = db.transaction('cards', 'readonly');
    var store = tx.objectStore('cards');
    var index = store.index('deckId');
    return index.openCursor(IDBKeyRange.only(deckId));
  }).then(function showRange(cursor, cards = []) {
    if (!cursor) {return cards;}
    cards.push(cursor.value);
    return cursor.continue().then(cursor => showRange(cursor, cards));
  }).then(function(cards) {
    dispatch(setCards(cards))
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return action.cards;
    default:
      return state;
  }
}
