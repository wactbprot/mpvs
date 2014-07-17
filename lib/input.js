var _         = require("underscore"),
    bunyan    = require("bunyan"),
    cheerio   = require("cheerio"),
    com       = require("./com"),
    net       = require("./net"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

/**
 * Schreibt Type, Value, Unit-Strukturen
 * nach ```../mp-id/exchange/..```. Die Werte werden
 * aus den ```inputs.val()``` extrahiert. Ein
 * solcher Wert geht  nach:
 * ```../mp-id/exchange/key/subkey/value```
 *
 * Bsp.:
 *
 * ```../mp-id/exchange/target_pfill/Value/value```
 *
 */

exports.section = function(req, cb){
  var $       = cheerio.load(req.body),
      $button = $("button"),
      id      = $button.attr("data-id"),
      key     = $button.attr("data-key"),
      $input  = $("input"),
      noOfInp = $input.length,
      co      = {id      : id,
                 key     : key,
                 struct  : "exchange"};

  for(var i = 0; i <  noOfInp; i++){
    var cip      = $input.eq(i),
        subkey   = cip.attr("data-subkey"),
        val      = cip.attr("value") || "";

    co.subkey = subkey + "/value";

    var ssa = com(net.set(co),
                  function(j,v){
                    return function(res){
                      log.info({ok:true}, "wrote >" + v +"< to " + co.key);
                      if(j ===  (noOfInp - 1)){
                        ready(id, key, cb);
                        log.info({ok:true}, "end request, all values written");
                      }
                    }
                  }(i,val));
    ssa.write(val);
    ssa.end()
  }
};

/**
 * Extrahiert Werte; schreibt Kommando
 * nach ```ssmp```-API.
 *
 * Bsp.: ```load``` nach:
 *
 * ```../mp-id/id/171816900d7b19af1d9ecdfdb36aae63```
 *
 * was die Hinzunahme des KD mit der id
 * ```171816900d7b19af1d9ecdfdb36aae63```
 * bewirkt.
 */

exports.button = function(req, cb){
  var $       = cheerio.load(req.body),
      $button = $("button"),
      method  = $button.attr("data-method"),
      api     = $button.attr("data-api"),
      cmd     = $button.attr("data-cmd"),
      co      = {path: api,
                 method:method};

  log.info({ok:true}, "receive button request");

  var ssa = com(net.set(co), function(res){
              log.info({ok:true}, "put " + cmd +"to " + api);
              cb("ok");
              log.info({ok:true}, "end request");

            });
  if(cmd){
    log.info({ok:true}, "write command: " + cmd + " to ssmp");
    ssa.write(cmd);
  }
  ssa.end()
}

var ready = function(id, key, cb){
  var co = {id      : id,
            key     : key,
            subkey  : "Ready",
            struct  : "exchange"};

  var ssa = com(net.set(co), function(res){
              log.info({ok:true}, "set key: " + key + " ready for read  out");
              cb("ok")
              log.info({ok:true}, "end request");
            });
  ssa.write('true');
  ssa.end()
}