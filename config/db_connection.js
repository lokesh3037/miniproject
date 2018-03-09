var mysql = require("mysql");
var config = require("./db_config");
module.exports = {
    "getConnection":function(){
        return mysql.createConnection({
            host:config.host,
            user:config.user,
            password:config.password,
            database:config.database
        });
    }  
};