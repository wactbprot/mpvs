var _         = require("underscore"),
    bunyan    = require("bunyan"),
    cheerio   = require("cheerio"),
    com       = require("./com"),
    net       = require("./net"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});


exports.section = function(req, cb){

  var $       = cheerio.load(req.body),
      $button = $("button"),
      id      = $button.attr("data-id"),
      key     = $button.attr("data-key"),
      $input  = $("input"),
      baseUrl = $button.attr("data-url"),
      noOfInp = $input.length,
      co      = {id      : id,
                 key     : key,
                 struct  : "exchange"};

  for(var i = 0; i <  noOfInp; i++){
    var cip      = $input.eq(i),
        subkey   = cip.attr("data-subkey"),
        val      = cip.attr("value") || "";

    co.subkey = subkey+"/value";

    var ssa = com(net.put(co),
                  function(j,v){
                    return function(res){
                      log.info({ok:true}, "wrote >" + v +"< to " + co.key + co.subkey);
                      if(j ===  (noOfInp - 1)){
                        cb("ok")
                        log.info({ok:true}, "end request");
                      }
                    }
                  }(i,val));
    ssa.write(val);
    ssa.end()
  }
};

exports.button = function(req, cb){
  var $ = cheerio.load(req.body),
      $button = $("button"),
      methode = $button.attr("data-method"),
      api     = $button.attr("data-api"),
      cmd     = $button.attr("data-cmd"),
      co      = {path: api,
                 methode:methode};

  var ssa = com(net.put(co), function(res){
              log.info({ok:true}, "put " + cmd +"to " + api);
              cb("ok")
              log.info({ok:true}, "end request");
            });
    ssa.write(cmd);
  ssa.end()
}