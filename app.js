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
      output  = require("./lib/output"),
      input   = require("./lib/input"),
      log     = bunyan.createLogger({name: name}),
      server  = restify.createServer({name: name,
                                      log: log});

  prog.version("0.0.2")
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
  server.get( "/img/:file", restify.serveStatic({
    'directory': __dirname
  }));
  server.get( "/js/:file", restify.serveStatic({
    'directory': __dirname
 }));


  server.get("/:id/exchange/:key", function(req, res, next){
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    output.exchange(req, function(s){res.write(s)}, function(){res.end()});
    next();
  });
 
  server.get("/:id/:page/:no", function(req, res, next){
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    output.main(req, function(s){res.write(s)}, function(){res.end()});
    next();
  });

  server.get("/:id/content/state/:no", function(req, res, next){
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    output.taskstate(req, function(s){res.write(s)}, function(){res.end()});
    next();
  });

  server.get("/:id/content/io/:no", function(req, res, next){
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    output.io(req, function(s){res.write(s)}, function(){res.end()});
    next();
  });

  server.get("/:id/content/io/:no/:key", function(req, res, next){
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    output.io(req, function(s){res.write(s)}, function(){res.end()});
    next();
  });

  /**
   * POST
   * http://server:port/id/exchange
   * - nimmt form dataen u.ä. entgegen
   * - sendet aufbereitet an ssmp
   */
  server.post("/:id/:struct", function(req, res, next){
    var struct =  req.params.struct;
    if(input[struct]){
      input[struct](req, function(rob){
        res.send(rob);
      });
    }else{
      res.send({error:"no input type named " + struct});
    }
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