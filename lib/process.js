var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    merge     = require("./merge"),
    build     = require("./build"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});


var contelem = function(req , wrtcb, endcb){
  var ccb =  function(structdata){
    com(net.excon(req), function(exdata){
      build.up(merge.vin(structdata, exdata), wrtcb, endcb)
    }).end();
  };

  com(net.subcon(req), ccb).end();
};
exports.contelem = contelem;

exports.main = function(req , cb){
  // complete page
}
