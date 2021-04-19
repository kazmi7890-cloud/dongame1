'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const axios = require('axios');
const { sanitizeEntity } = require('strapi-utils');
const dates = require('date-fns');

module.exports = {

    async authorize(ctx) {
        const { userId, subsId, game, type } = ctx.request.body;
        try {
            let auth_dev = 'Basic QWRSQW96S0RqTWlIbEcxM0tlWktUcUlla21WazNYbXp5UWRHeHo1MktPc1pPZWlpSlVYTi1CTG0yUzFySUdmSVB6RHhUbWN5Vml6c2E0bko6RUFHQkI3OFpPalpUZVlKOFI1Y2pwbFNyb0taZ0FKb2dmUGF3MnR0ZS04WkNNZUxxREFQWGFFR2swYjI5UndRS25tVk1TVWhiY25MUzhldDk=';
            let auth_prod = 'Basic QVJ0YThsT1BVTE1VQ0QySWxiMnVpcXlaUHNKZy1OMVZGam94dC1wSkZrM2wxNzFGb0VRYUFzcEZ5ZHZiTjNTaTlIOFc5RmtwTmlrcmM2SU46RUR0Y2lOeWExTi02c3NzX3lENTVhWnJOcDRiYUt6LV9ucDhtY2lvRHlQRmpJSkRHWDZmS2J2SnZ6SmZQcW9tRjBKR3JpSm5pTURaQkxBZm0=';
            const config = {
                method: 'get',
                url: `https://api.sandbox.paypal.com/v1/billing/subscriptions/` + subsId,
                headers: { 'Authorization': auth_dev }
            }
            const {data} = await axios(config);
            if (data.status == 'ACTIVE') {
                let body = {
                    "status": data.status,
                    "game": game,
                    "type": type,
                    "remark": "",
                    "nextBillingTime": data.billing_info.next_billing_time,
                    "finalPaymentTime": data.billing_info.final_payment_time,
                    "userId": userId,
                    "subsId": subsId,
                    "paypal": data

                }
                let entity = await strapi.services.subscription.create(body);
                return sanitizeEntity(entity, { model: strapi.models.subscription });
            }
        } catch (error) {
            const { response } = error;
            console.log(error);
            // const { request, ...errorObject } = response; // take everything but 'request'
            return response;
        }

    },

};
