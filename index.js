var request=require('request');
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true }));
var path=require('path');

app.post('/echo', function(req, res) {
if((!req.body) return res.sendStatus(400)
res.setHeader('Content-Type','application/json');
var message=req.body.queryResult.parameters['echoText']
let response="";
let responseObj= {
                   "fulfillmentText": response,
                   "fulfillmentMessages": [{"text": {"text": ["This message from Claim API Service"]}}],
				   "source":""
				  }
 return res.json(responseObj);