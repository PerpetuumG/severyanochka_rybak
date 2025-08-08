// eslint-disable-next-line @typescript-eslint/no-require-imports
const users = require('./usersDatabase.json');

module.exports = {
  async up(db) {
    // TODO write your migration here.
    await db.collection('users').insertMany(users);
  },

  // async down(db, client) {
  //   // TODO write the statements to rollback your migration (if possible)
  //
  // }
};
