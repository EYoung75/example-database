
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('things').del()
    .then(function () {
      // Inserts seed entries
      return knex('things').insert([
        {
          thing: "iphone",
          where: "my pocket",
          how_many: 1
        },
        {
          thing: "MacBook",
          where: "on the desk",
          how_many: 1
        },
        {
          thing: "water bottle",
          where: "in my backpack",
          how_many: 2
        }
      ]);
    });
};
