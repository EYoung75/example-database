
exports.up = function(knex, Promise) {
  return knex.schema.createTable('things', (thing) => {
    thing.increments("id")
    thing.string("thing")
    thing.string("where")
    thing.integer("how_many")
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('things')
  };
  
