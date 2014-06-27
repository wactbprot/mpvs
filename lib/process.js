var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    merge     = require("./merge"),
    build     = require("./build"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});



var main = function(req , wrtcb, endcb){
  build.main.up({title:"http"}, wrtcb, endcb)
};
exports.main = main;