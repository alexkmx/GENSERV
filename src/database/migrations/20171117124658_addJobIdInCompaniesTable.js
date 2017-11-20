
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('jobs', table => {
      table
        .integer('company_id')
        .unsigned()
        .references('id')
        .inTable('companies');


      return table;
    });
  };

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('jobs', table => {
      table.dropForeign('company_id');
      table.dropColumn('company_id');

      return table;
    });
  };
