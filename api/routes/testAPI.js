
const path = require('path');
var express = require("express");
var router = express.Router();
var jsforce = require('jsforce')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const logUrl = process.env.loginUrl
const cliId = process.env.clientId
const cliSec = process.env.clientSecret
const redUrl = process.env.redirectUri
const pass = process.env.password
const user = process.env.username


router.post('/', function (req, res, next) {

  var conn = new jsforce.Connection({
    oauth2: {

      loginUrl: logUrl,
      clientId: cliId,
      clientSecret: cliSec,
      redirectUri: redUrl
    }
  });

  conn.login(user, pass, function (err, userInfo) {
    if (err) { return console.error(err); }
    console.log("URL: " + conn.instanceUrl);
    conn.sobject("Lead").create({ FirstName:req.body.accountName, LastName:req.body.lastName, Email: req.body.email, Phone: req.body.phone, Company: req.body.company, Website: req.body.website }, function (err, ret) {
      if (err || !ret.success) { return console.error(err, ret); }
     
    });

  });


  console.log(req.body)



})




module.exports = router