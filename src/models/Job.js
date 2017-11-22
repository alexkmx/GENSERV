const {Model} = require('objection');

class Jobs extends Model {
  static get tableName(){
    return 'jobs';
    }
  }

module.exports = Jobs;
