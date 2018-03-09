var express = require("express");
var config = require("../../config/db_config");
var mongodb = require("mongodb");
var router = express.Router();
var miniprojectClient = mongodb.MongoClient;
router.post("/portfolio",function(req,res){
    var c_token = req.body.token;
    miniprojectClient.connect("mongodb://localhost:27017/demo",
            function(err,db){
        if(err){
            console.log("Error !");
        }else{
            db.collection("products").find().toArray(
                    function(err,array){
                if(err){
                    console.log("Error !");
                }else{
                    if(c_token == config.token){
                        res.send(array);
                    }else{
                        res.send({"404":"UnAuthorized User !"});
                    }
                }            
            });
        }            
    });
});
module.exports = router;