var _         = require("underscore"),
    bunyan    = require("bunyan"),
    cheerio   = require("cheerio"),
    com       = require("./com"),
    net       = require("./net"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});


exports.section = function(req, cb){

  $ = cheerio.load(req.body);
  var dataObj = {},
      $button = $("button"),
      id      = $button.attr("data-id"),
      key     = $button.attr("data-key"),
      $input  = $("input"),
      noOfInp = $input.length,
      baseUrl = $button.attr("data-url"),
      co      = {id      : id,
                 key     : key,
                 struct  : "exchange"};

  for(var i = 0; i <  noOfInp; i++){
    var cip      = $input.eq(i),
        subkey   = cip.attr("data-subkey"),
        val      = cip.attr("value") || "";

    co.subkey = subkey+"/value";

    var ssa = com(net.put(co), function(j,v){
                                 return function(res){
                                   log.info({ok:true}, "wrote >" + v +"< to " + co.key);
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