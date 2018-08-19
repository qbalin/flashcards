import localforage from 'localforage';

const initialState = [];


localforage.setItem('decks', [
  {
    name: 'Countries',
    cards: [
      {
        sides: [
          {
            content: 'Paris',
          },
          {
            content: 'France',
          },
        ],
      },
      {
        sides: [
          {
            content: 'Washington',
          },
          {
            content: 'USA',
          },
        ],
      },
    ],
  },
  {
    name: 'Chinese',
    cards: [
      {
        sides: [
          {
            content: '买',
          },
          {
            content: 'to buy',
          },
        ],
      },
      {
        sides: [
          {
            content: '朋友',
          },
          {
            content: 'friend',
          },
        ],
      },
    ],
  },
]);


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
