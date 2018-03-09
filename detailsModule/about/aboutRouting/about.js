var express = require("express");
var config = require("../../../config/db_config");
var router = express.Router();
var fs = require("fs");
router.post("/about",function(req,res){
    console.log("In About Module !");
    var c_token = req.body.token;
    console.log(c_token);
    console.log("Server Token..."+config.token);
    if(c_token == config.token){
        fs.readFile("C:/Users/india/Desktop/miniproject/detailsModule/about/static/sample.json",
                function(err,data){
            res.send(data);
        });
    }else{
        res.send({'404':'UnAuthorized User !'});
    };
});
module.exports = router;