var http     = require("http"),
    bunyan   = require("bunyan"),
    deflt    = require("./default"),
    log      = bunyan.createLogger({name: deflt.appname});

module.exports = function(con, cb){
  var req = http.request(con, function(res) {

              res.setEncoding("utf8");
              res.on("data", function (data) {
                log.info({ok:true}, "receive data from ssmp path: " + con.path )
                cb(JSON.parse(data));
              });
              res.on("end", function(){
                log.info({ok:true}, "end request to ssmp")
              });
              res.on("error", function(e){
                log.error({error:e}, "error on data receive from ssmp")

              });
            });

  req.on("error", function(e) {
    log.error({error:e}, "error on data request")
  });
return req;
};
