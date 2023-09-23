'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('akamail')
      .service('myService')
      .getWelcomeMessage();
  },
});
