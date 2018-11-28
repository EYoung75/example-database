
exports.up = function(knex, Promise) {
  return knex.schema.createTable('examples', (thing) => {
    thing.increments("id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('examples')
};
