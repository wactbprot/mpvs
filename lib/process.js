var _         = require("underscore"),
    H         = require("handlebars"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    merge     = require("./merge"),
    net       = require("./net"),
    template  = require("./template"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var sub = function(req , cb){
  var struct   = req.params.struct,
      hc       = H.compile( template[struct] );

  var ccb = (function(t){
               return function(structdata){
                 com(net.excon(req),function(exdata){
                   cb(t(merge.vin(structdata, exdata)));
                 }).end();
               }}
            )(hc);

  com(net.subcon(req), ccb).end();
};
exports.sub = sub;

exports.main = function(req , cb){
  // complete page
}
