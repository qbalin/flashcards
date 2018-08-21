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


  dbPromise.then((db) => {
    const tx = db.transaction('decks', 'readwrite');
    tx.objectStore('decks').add({
      name: 'Chinese'
    });
    return tx.complete;
  });

  dbPromise.then((db) => {
    const tx = db.transaction('decks', 'readwrite');
    tx.objectStore('decks').add({
      name: 'Countries'
    });
    return tx.complete;
  });


}());
