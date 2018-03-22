const express = require('express');
const router  = express.Router();
const path = require('path');
const jwt       = require('express-jwt');

const request = require('request');
var clientCert = process.env.CLIENT_CRT;
var clientKey = process.env.CLIENT_KEY;
var hostUrl = process.env.HOST;

var auth0Secret = process.env.AUTH0_SECRET;
var audience = process.env.AUTH0_CLIENT_ID;

var agentOptions =        {
    cert: clientCert,
    key: clientKey
}

var authCheck = jwt({
    secret: new Buffer(auth0Secret),
    audience: audience
})

router.get('/cluster', authCheck, (req, res) => {   
    console.log("cluster page")
    // res.json({result: "Hello from Cluster from router"}) 
    request({
        rejectUnauthorized: false, 
        url: hostUrl + "/healthz",
        agentOptions
    },function (error, response, body) {
        // console.log(error)
        var result = {status: body}
        console.log(result)
        res.json(result)            
    })
})

router.get('/components', authCheck, (req, res) => {
    console.log("components page")
    request({
        rejectUnauthorized: false, 
        url: hostUrl + "/api/v1/componentstatuses",
        agentOptions
    },function (error, response, body) {
        var body = JSON.parse(body);
        var result = body.items
        console.log(result)
        res.json(result)            
    })
})

router.get('/nodes', authCheck, (req, res) => {
    console.log("nodes page");
    request({
        rejectUnauthorized: false, 
        url:  hostUrl + "/api/v1/nodes",
        agentOptions
    },function (error, response, body) {
        var body = JSON.parse(body);
        var result = body.items
        console.log(result)
        res.json(result)            
    })
})

router.get('/namespaces', authCheck, (req, res) => {
    console.log("namespaces page");
    request({
        rejectUnauthorized: false, 
        url: hostUrl + "/api/v1/namespaces",
        agentOptions
    },function (error, response, body) {
        var body = JSON.parse(body);
        var result = body.items
        console.log(result)
        res.json(result)            
    })
})

// router.get('/contact', (req, res) => {
//     console.log("contact page")
// })

// router.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
//   });

router.get('*', (req, res) => {
	res.json('404')
});

module.exports = router;