var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var exchange = function(req , wrtcb, endcb){
  var ccb = function(data){
    var parts = {};

    for(var e in data){
      if(hc.element[e]){
      parts[e] = hc.element[e](data[e]);
      }
    };
    if(data.DisplayAs &&
       hc.display[data.DisplayAs]){

      wrtcb(hc.display[data.DisplayAs](parts));

    }
    endcb("ok");
  };
  com(net.exchange(req), ccb).end();
};
exports.exchange = exchange;

var page = function(req , wrtcb, endcb){

  wrtcb(hc.main());


}
exports.page = page;