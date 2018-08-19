import localforage from 'localforage';

const initialState = [];


//localforage.setItem('decks', [1, 2, 3, 4, 5]);


const SET_DECKS = 'SET_DECKS';

const setDecks = decks => ({ type: SET_DECKS, decks });

export const loadDecks = () => dispatch => localforage.getItem('decks').then(decks => dispatch(setDecks(decks)));


export default function allDecks(state = initialState, action) {
  switch (action.type) {
    case SET_DECKS:
      return action.decks;
    default:
      return state;
  }
}
