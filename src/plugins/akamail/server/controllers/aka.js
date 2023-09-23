
const bcrypt = require("bcryptjs");

function sendmail(email) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "domain": "app.akadigital.net",
        "key": "aka",
        "pkey": "private_app.key",
        "from": "sender@app.akadigital.net",
        "to": email,
        "subject": "Test Mail",
        "text": "This is a test email from app.",
        "html": "<html><body><h1>Your HTML content here</h1></body></html>"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://email.unito.vn/api/send-email", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

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
        let Email = '';
        let id = ''
        let i = 0;
        console.log(data_body);
        console.log(user_identities[0].identity_type);
        for (i = 0;i <= user_identities.length;i++){
            if(user_identities[i].identity_type == 'email'){
                Email = user_identities[i].identity 
            } else if(user_identities[i].identity_type == 'customer_id'){
                id = user_identities[i].identity
            }
        }
        
        let Mobile = user_attributes.Mobile != undefined? user_attributes.Mobile :'' 
        let City = user_attributes.City != undefined?  user_attributes.City: ''
        console.log(data_body);
        let count = 0;
        if (data_body.events[0].data.custom_event_type == 'add_to_cart') {
            console.log('update')
            count = count + 1;
            let entry = await strapi.db.query('plugin::akamail.akalead').create({
                data: {
                    id : id,
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
            sendmail(Email)
        }
        console.log(count)



        // }

    },

    async delete(ctx){
        const entry = await strapi.entityService.delete('plugin::akamail.akalead', -8110933852199574000);
    }
}


