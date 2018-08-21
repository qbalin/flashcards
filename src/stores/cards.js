import idb from 'idb';

const initialState = [];

const SET_CARDS = 'SET_CARDS';

const setCards = cards => ({ type: SET_CARDS, cards });

export const loadCards = deckId => (dispatch) => {
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
  }).then((cards) => {
    console.log('cards', cards);
    dispatch(setCards(cards));
  });
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      console.log('cards--->', action.cards);
      return action.cards;
    default:
      return state;
  }
}
