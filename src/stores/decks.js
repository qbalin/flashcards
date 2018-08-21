import idb from 'idb';

const initialState = [];

const SET_DECKS = 'SET_DECKS';

const setDecks = decks => ({ type: SET_DECKS, decks });

export const loadDecks = () => (dispatch) => {
  const dbPromise = idb.open('flashcards');
  dbPromise.then(db => {
    const tx = db.transaction('decks', 'readonly');
    const store = tx.objectStore('decks');
    return store.getAll();
  }).then(decks => {
    console.log('decks',decks)
    dispatch(setDecks(decks));
  });
};

export default function allDecks(state = initialState, action) {
  switch (action.type) {
    case SET_DECKS:
      return action.decks;
    default:
      return state;
  }
}
