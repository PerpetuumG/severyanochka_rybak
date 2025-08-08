// eslint-disable-next-line @typescript-eslint/no-require-imports
const catalog = require('./catalogDatabase.json');

module.exports = {
  async up(db) {
    // TODO write your migration here.
    await db.collection('catalog').insertMany(catalog);
  },

  // async down(db, client) {
  //   // TODO write the statements to rollback your migration (if possible)
  // },
};
