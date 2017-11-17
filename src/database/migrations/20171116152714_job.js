
exports.up = function(knex, Promise) {
  return knex
   .schema
   .createTable('jobs', table => {
     table.string('title');
     table.string('description');
     table.string('location');
     table.integer('salary');
     table.boolean('fullTime');
     table.integer('company_id');
   })

};

exports.down = function(knex, Promise) {
  return knex
  .schema
  .dropTableIfExists('jobs');
};
