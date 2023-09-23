"use strict";


const config = require("@strapi/strapi/lib/core/registries/config");


module.exports = {
    type: 'content-api',
    routes: [
        {
            method: "GET",
            path: "/send",
            handler: "Aka.send",
            config: {
                policies: []
            }
        }
    ]
}
