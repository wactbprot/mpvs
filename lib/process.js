var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});


var exchange = function(req , wrtcb, endcb){
  var ccb = function(data){

    for(var e in data){

      if(hc.element[e]){
        wrtcb(hc.element[e](data[e]));
      }
    };
    endcb("ok");
  };
  com(net.exchange(req), ccb).end();
};
exports.exchange = exchange;
