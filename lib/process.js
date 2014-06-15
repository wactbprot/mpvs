var _         = require("underscore"),
    H         = require("handlebars"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    template  = require("./template"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var get = function(req , cb){
  var struct   = req.params.struct,
      hc       = H.compile( template[struct] );

  var ccb = (function(t){
               return function(d){
                 cb(t(d));
               }}
            )(hc);

  com(con(req), ccb).end();
};
exports.get = get;

var con = function(req){
  var  id    = req.params.id,
      struct = req.params.struct,
      path   = "/" + id + "/"+ struct;

  return {
    hostname:  "localhost",
    port:       8001,
    path:       path,
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}