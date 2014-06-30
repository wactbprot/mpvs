/**
 * 1. The server returns structured semantic HTML markup
 * that is independent of layout information and
 * client behavior. [posh]
 *
 * -- http://roca-style.org/
 */
(function() {
  var name    = "mpvs",
      _       = require("underscore"),
      prog    = require("commander"),
      restify = require("restify"),
      bunyan  = require("bunyan"),
      proc    = require("./process"),
      log     = bunyan.createLogger({name: name}),
      server  = restify.createServer({name: name,
                                      log: log});

  prog.version("0.0.1")
  .option("-P, --port <port>", "port (default is  8001)", parseInt)
  .parse(process.argv);

  var port = prog.port || 8002;

  server.pre(restify.pre.sanitizePath());
  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  server.use(
    function crossOrigin(req,res,next){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      return next();
    }
  );

  server.get( "/css/:file", restify.serveStatic({
    'directory': __dirname,
    'default': 'main.css'
 }));


  server.get("/:id/exchange/:key", function(req, res, next){
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    proc.exchange(req, function(s){res.write(s)}, function(){res.end()});
    next();
  });

  server.get("/:id/io/:no", function(req, res, next){
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    proc.io(req, function(s){res.write(s)}, function(){res.end()});
    next();
  });

  /**
   * --- go!---
   */
  server.listen(port, function() {
    log.info({ok: true},
             "server runs on port: " + port);
  });

}).call(this);