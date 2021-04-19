'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {

    async findJoined(ctx) {
        const { userId } = ctx.params;

        /*
        // This Syntax is mongoose based and will accept pure mongo query.
        let entities = await strapi.query("pubg-match").model.find({});
        */
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['pubg-match'].search(ctx.query);
        } else {
            entities = await strapi.services['pubg-match'].find(ctx.query);
        }

        return entities.filter(entity => {
            const pubgMatch = sanitizeEntity(entity, {
                model: strapi.models['pubg-match'],
            });

            console.log("Checking if user has joined the match.")
            if (pubgMatch.joinings) {
                return pubgMatch.joinings.some(join => join.userId == userId);
            }

            return false;
        }).map(e => { return e; });
    },

};
