import idb from 'idb';

(function () {
  // check for support
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
    return;
  }

  console.log('This browser supports IndexedDB');

  const dbPromise = idb.open('flashcards', 1, (upgradeDb) => {
    console.log('making a new object store');

    switch (upgradeDb.oldVersion) {
      case 0:
        if (!upgradeDb.objectStoreNames.contains('decks')) {
          upgradeDb.createObjectStore('decks', { keyPath: 'id', autoIncrement: true });
        }
        if (!upgradeDb.objectStoreNames.contains('cards')) {
          const cardsOS = upgradeDb.createObjectStore('cards', { keyPath: 'id', autoIncrement: true });
          cardsOS.createIndex('deckId', 'deckId', { unique: false });
        }
        if (!upgradeDb.objectStoreNames.contains('sides')) {
          const sideOS = upgradeDb.createObjectStore('sides', { keyPath: 'id', autoIncrement: true });
          sideOS.createIndex('cardId', 'cardId', { unique: false });
        }
    }
  });

  const addObj = (obj, objectStoreName) => {
  	dbPromise.then((db) => {
      const tx = db.transaction(objectStoreName, 'readwrite');
      tx.objectStore(objectStoreName).add(obj);
      return tx.complete;
    });
  };


  // ['Chinese', 'Countries'].forEach(name => addObj({ name }, 'decks'));

  // [''].forEach((name, idx) => addObj({ deckId: idx + 1 }, 'cards'));

  // [{ content: '买' }, { content: 'to buy' }, { content: 'mai' }].forEach((side, idx) => addObj(Object.assign({}, side, { cardId: 1 }), 'sides'));
  // [{ content: '去' }, { content: 'to go' }, { content: 'qu' }].forEach((side, idx) => addObj(Object.assign({}, side, { cardId: 3 }), 'sides'));
  // [{ content: 'Paris' }, { content: 'France' }].forEach((side, idx) => addObj(Object.assign({}, side, { cardId: 2 }), 'sides'));
}());
