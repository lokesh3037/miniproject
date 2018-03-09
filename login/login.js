//import express module
//express module used to create the Rest API.
var express = require("express");
//create the router
//to implement the modularity
var router = express.Router();
//import db configuration
var config = require("../config/db_config");
//import connection object
var connection = require("../config/db_connection");
//import jwt utility function
var token = require("../tokens/genarateToken");
//create connection object
var conn = connection.getConnection();
//connect to database
conn.connect();
//create the post request
router.post("/login",function(req,res){
    //reading the post parameters
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    //preparing the sql query
    var sql = "select * from login_details where uname='"+uname+"' and upwd='"+upwd+"'";
    conn.query(sql,function(err,recordsArray,fields){
        if(recordsArray.length>0){
            //set the token to config file
            config.token = token(uname,upwd,config.secretKey); 
            //send the positive response to client
            res.send({'login':'success','token':config.token});
        }else{
            //send the error response to client
            res.send({'login':'fail'});
        }
    });
});
//exporting the router
module.exports = router;