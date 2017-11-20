const { Model } = require('objection');

class Company extends Model {
  static get tableName () {
    return 'companies';
  }

  static get relationMappings(){
    const Jobs = require('./Job.js');

      return {
        jobs:{
          relation: Model.HasManyRelation,
          modelClass: Jobs,
          join: {
            from: 'companies.id',
            to: 'jobs.company_id',      //Creo la relación de usuario y modelo de twe

            }
          }
        };
      }
 }

module.exports = Company;
