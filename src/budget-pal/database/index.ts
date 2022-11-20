import * as PouchDB from 'pouchdb-browser'


const pouchDB = PouchDB.default.defaults({});
export const transactionsDb = new pouchDB('transactions')

transactionsDb.info().then((info) => {
  console.log('Connected to PouchDB', info);
}).catch(e => console.error(e))
