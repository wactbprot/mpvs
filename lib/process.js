var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    merge     = require("./merge"),
    build     = require("./build"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});


var element = function(req , wrtcb, endcb){
  var ccb =  function(structdata){
    com(net.excon(req), function(exdata){
      build.element.up(merge.vin(structdata, exdata), wrtcb, endcb)
    }).end();
  };

  com(net.subcon(req), ccb).end();
};
exports.element = element;

var main = function(req , wrtcb, endcb){
  build.main.up({title:"http"}, wrtcb, endcb)
};
exports.main = main;