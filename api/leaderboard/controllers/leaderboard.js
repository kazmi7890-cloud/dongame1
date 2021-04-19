'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async mostPlayedNew(ctx) {

    const pubgPlayed = await strapi
      .query('pubg-user-match-map').count(ctx.query);

      const pubgTotal = await strapi
      .query('pubg-user-match-map').count(ctx.query);

      const ludoPlayed = await strapi
      .query('ludo-user-match-map').count(ctx.query);
     
      const ludoTotal = await strapi
      .query('ludo-user-match-map').count(ctx.query);

      const codPlayed = await strapi
      .query('cod-user-match-map').count(ctx.query);
     
      const codTotal = await strapi
      .query('cod-user-match-map').count(ctx.query);

      let data = {
        "pubg":{
          "played":pubgPlayed,
          "total": pubgTotal
        },
        "ludo":{
          "played":ludoPlayed,
          "total":ludoTotal
        },
        "cod":{
          "played":codPlayed,
          "total":codTotal
        }
      };
    //console.log(data);
    return data;
  },

  async mostPlayed(ctx) {
    const { id } = ctx.params;
    const pubgPlayed = await strapi
      .query('pubg-user-match-map').count({userId: id });
      // .model.query(qb => {
      //   qb.count('userId', id);
      // })
      //.fetchAll();

      const pubgTotal = await strapi
      .query('pubg-user-match-map').count();

      const ludoPlayed = await strapi
      .query('ludo-user-match-map').count({userId: id });
     
      const ludoTotal = await strapi
      .query('ludo-user-match-map').count();

      let data = {
        "pubg":{
          "played":pubgPlayed,
          "total": pubgTotal
        },
        "ludo":{
          "played":ludoPlayed,
          "total":ludoTotal
        }
      };
    console.log(data);
    return data;
    //const fields = pubg.toJSON();
    //return fields;

    // strapi.services.email.send('nitin.jha583@gmail.com','arun.jha1301@gmail.com', 'Welcome', '...');

    // return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.leaderboard }));

  },

  async leaderBoardByDate(ctx) {

    // All the consolidated data of transaction should be dumped into leader board with date wise filter.

    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.transaction.search(ctx.query);
    } else {
      entities = await strapi.services.transaction.find(ctx.query);
    }
    
    let mergeTransactionByUser ={};
    entities.map(entity => {

      // Merge the Obects with similar userId
      const transaction = sanitizeEntity(entity, {
        model: strapi.models.transaction,
      });
      if(transaction.user){
        console.log(transaction.user);
        const user = sanitizeEntity(transaction.user,{
          model: strapi.query("user", "users-permissions").model
        })
        
        console.log('======== User  =============')
        console.log(user);
        if(user && mergeTransactionByUser && mergeTransactionByUser[user.id] == user['id']){
          // TODO Append the data.
        }else{
          mergeTransactionByUser[user.id] = transaction;
          return transaction;
        }
        
      }
    });

    return mergeTransactionByUser;
  }

};
