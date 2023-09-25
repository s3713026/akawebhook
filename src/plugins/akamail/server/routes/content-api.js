"use strict";


const config = require("@strapi/strapi/lib/core/registries/config");


module.exports = {
    type: 'content-api',
    routes: [
        {
            method: "POST",
            path: "/send",
            handler: "Aka.send",
            config: {
                policies: []
            }
        },
        {
            method: "POST",
            path: "/sendfromaka",
            handler: "Aka.sendfromaka",
            config:{
                policies:[]
            }
        },
        {
            method: "GET",
            path: "/delete",
            handler: "Aka.delete",
            config:{
                policies:[]
            }
        }

    ]
}
