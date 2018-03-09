var jwt = require("jwt-simple");
module.exports = function(arg1,arg2,arg3){
    return jwt.encode({'uname':arg1,'upwd':arg2},arg3);
};