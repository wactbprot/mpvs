var _         = require("underscore"),
    H         = require("handlebars"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    merge     = require("./merge"),
    template  = require("./template"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var sub = function(req , cb){
  var struct   = req.params.struct,
      hc = H.compile( template[struct] );

  var ccb = (function(t){
               return function(structdata){
                 com(excon(req),function(exdata){

                   var h = t(merge.vin(structdata, exdata));
                   console.log(h)

                   cb(h);
                 }).end();
               }}
            )(hc);

  com(con(req), ccb).end();
};
exports.sub = sub;

exports.main = function(req , cb){
  // complete page
}


var con = function(req){
  var id     = req.params.id,
      struct = req.params.struct,
      no     = req.params.no || "";
  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/"+ struct + "/" + no,
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}


var excon = function(req){
  return {
    hostname:  "localhost",
    port:       8001,
    path:        "/" +req.params.id + "/exchange",
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}
