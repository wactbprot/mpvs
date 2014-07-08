var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    net       = require("./net"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});


exports.section = function(req, cb){
  console.log(req.body)

  cb("ok")

};