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
        let entities = await strapi.query("ludo-matches").model.find({});
        */
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['ludo-matches'].search(ctx.query);
        } else {
            entities = await strapi.services['ludo-matches'].find(ctx.query);
        }

        return entities.filter(entity => {
            const ludoMatch = sanitizeEntity(entity, {
                model: strapi.models['ludo-matches'],
            });

            console.log("Checking if user has joined the match.")
            if (ludoMatch.joinings) {
                return ludoMatch.joinings.some(join => join.userId == userId);
            }

            return false;
        }).map(e => { return e; });
    },

};
