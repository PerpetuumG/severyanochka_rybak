// eslint-disable-next-line @typescript-eslint/no-require-imports
const products = require('./productsDatabase.json');

module.exports = {
  async up(db) {
    // TODO write your migration here.
    await db.collection('products').insertMany(products);
  },

  // async down(db, client) {
  //   // TODO write the statements to rollback your migration (if possible)
  //
  // }
};
