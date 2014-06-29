var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var exchange = function(req , wrtcb, endcb){

  com(net.exchange(req), function(data){
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
  }).end();
};
exports.exchange = exchange;

var io = function(req , wrtcb, endcb){
  var mainob ={};
  com(net.title(req), function(t){
    mainob.title = t;
    wrtcb(hc.main(mainob));
    endcb("ok");

  }).end()
}
exports.io = io;