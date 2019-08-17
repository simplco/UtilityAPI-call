const https = require('https')
//Step 1 is to create a new, blank form. 

var id;
const options =
{
    hostname: 'utilityapi.com',
    path: '/api/v2/forms',
    method: 'POST',
    headers:
    {
        Authorization: 'Bearer 144d154ee8e74d3aa14433189c60b795'
    }
}

const req = https.request(options, (res) => {
    res.on('data', (d) => {
        process.stdout.write(JSON.parse(d).user_uid)
        id = JSON.parse(d).user_uid;
    })
})



req.on('error', (error) => {
    // console.error(error)
})

//req.write(data)
req.end();


//Step 2: once blank form is created, Simulate Someone submitting. Receive
const optionstwo = {
    hostname: 'utilityapi.com',
    port: 443,
    path: '/api/v2/forms/' + id,
    method: 'GET',
    headers: {
        'Authorization': 'Bearer 144d154ee8e74d3aa14433189c60b795',
        'Content-Type': 'application/json',

    },
    body: {
        "uid": "uid"
    }
3
};
var req1 = https.request(optionstwo, (res) => {
    if (res.statusText = 'success') {
        process.stdout.write(JSON.parse(d).referral)
        id = JSON.parse(d).referral;
  
    }
});
req.end();

/*
//Step 3: once blank form is created, need user to fill it with data.
//Get the form and fill it with data
const optionsthree = {
    hostname: 'utilityapi.com',
    port: 443,
    path: '/api/v2/forms/67287',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 144d154ee8e74d3aa14433189c60b795',
        'Content-Type': 'application/json',

    },
 body: {
    "utility": "DEMO",
    "scenario": "residential"
 }

};
var req = https.request(optionstwo, (res) => {
    if(res.statusText = 'success') {
        console.log("ok");
        console.log(res);
    }
});
req.end();

//Get Authorizations and Meters associated with the referral code (includes meter_uid 44445555)
const optionsfour = {
    hostname: 'utilityapi.com',
    port: 443,
    path: '/v2/authorizations?referrals=ABCDEFG&include=meters',
    method: 'GET',
    headers: {
        'Authorization': 'Bearer 144d154ee8e74d3aa14433189c60b795',
        'Content-Type': 'application/json',

    },

};
var req = https.request(optionstwo, (res) => {
    if(res.statusText = 'success') {
        console.log("ok");
        console.log(res);

    }
});
req.end();

//Activate the meter to collect historical data
const optionsfive = {
    hostname: 'utilityapi.com',
    port: 443,
    path: '/api/v2/meters/historical-collection',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 144d154ee8e74d3aa14433189c60b795',
        'Content-Type': 'application/json',

    },
 body: {
    "meters": ["44445555"]
 }

};
var req = https.request(optionstwo, (res) => {
    if(res.statusText = 'success') {
        console.log("ok");
        console.log(res);
    }
});
req.end();
*/