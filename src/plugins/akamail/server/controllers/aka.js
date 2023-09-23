const bcrypt = require("bcryptjs");


module.exports = {
    async send(ctx) {
        // //check basic authentication (username - password)
        // var basic_auth_panel = Buffer.from(ctx.request.header.authorization.split(" ")[1], 'base64').toString();


        // var arr = basic_auth_panel.split(':');


        // const basic_auth = await strapi.db.query('plugin::users-permissions.user').findOne({
        //     where: {
        //         username: 'akadigital'
        //     }
        // });


        // var check = await bcrypt.compare(arr[1], basic_auth.password)


        //if username - password match
        // if (check == true) {
            ctx.body = "Welcome to AKA Netcore Webhook"


            let request_urls = ctx.request.url;
            let request_method = ctx.request.method;
            let request_record = ctx.request["x-forwarded-for"];


            //string
            let data_body = ctx.request.body.data;



        // }

    }
}


