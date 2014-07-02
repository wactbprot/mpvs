var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var exchange = function(req , wrtcb, endcb){

  com(net.exchange(req), function(data){
    var parts  = {},
        key    = req.params.key;


    for(var e in data){
      if(hc.element[e]){
        data[e].key = key;
        parts[e]    = hc.element[e](data[e]);
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
  var no = req.params.no;
  com(net.frame(req), function(frame){
    frame.no = no;
    wrtcb(hc.main(frame));
    endcb("ok");

  }).end()
}
exports.io = io;