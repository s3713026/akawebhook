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
            console.log('run webhook')
            ctx.body = "Welcome to AKA Netcore Webhook"
            


            let request_urls = ctx.request.url;
            let request_method = ctx.request.method;
            let request_record = ctx.request["x-forwarded-for"];


            //string
            let data_body = ctx.request.body;
            let user_identities = data_body.user_identities;
            let user_attributes = data_body.user_attributes;
            let Email = user_identities[0].identity
            let Mobile = user_attributes.Mobile
            let City = user_attributes.City
            console.log("NUMM",data_body.mpid * -1)
            let count = 0;
            if(data_body.events[0].data.custom_event_type == 'add_to_cart'){
                console.log('update')
                count = count +1;
                let entry = await strapi.db.query('plugin::akamail.akalead').create({
                    data: {
                    id: data_body.mpid * -1,
                    Email: Email,
                    Mobile: Mobile,
                    //   Full_Name: Full_Name,
                    City: City,
                    //   Lead_Source: Lead_Source,
                    //   Submitted_Date: Submitted_Date,
                    //   Journey_Name: journey_name,
                    //   List_Name: list_name
                    }
                });
            }
            console.log(count)



        // }

    }
}


