var _         = require("underscore"),
    bunyan    = require("bunyan"),
    cheerio   = require("cheerio"),
    com       = require("./com"),
    net       = require("./net"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});


exports.section = function(req, cb){

  $ = cheerio.load(req.body);
  var $button = $("button"),
      mpid    = $button.attr("data-id"),
      key     = $button.attr("data-key"),
      $input  = $("input"),
      noOfInp = $input.length,
      baseUrl = $button.attr("data-url")

  for(var i = 0; i <  noOfInp; i++){
    var cip      = $input.eq(i),
        subkey   = cip.attr("data-subkey"),
        type     = cip.attr("data-type"),
        required = cip.attr("required") === "true",
        val      = cip.val();
    if(required && val){

    }
    console.log(baseUrl + "/" + subkey+ "/value");
    if(val)    console.log(val)
  }




 cb("ok")

};