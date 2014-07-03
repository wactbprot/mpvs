var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    net       = require("./net"),
    hc        = require("./hcomp"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var exchange = function(req , wrtcb, endcb){
  var key    = req.params.key;

  com(net.exchange(req), function(data){

    if(_.isFunction(wrtcb)){
      wrtcb(buildExchange(key, data))
    }
    if(_.isFunction(endcb)){
      endcb("ok");
    }
  }).end();
};
exports.exchange = exchange;

var buildExchange = function(key, data){

  var ret,
      parts  = {};

  for(var e in data){
    if(hc.element[e]){
      data[e].key = key;
      parts[e]    = hc.element[e](data[e]);
    }
  };

  if(data.DisplayAs &&
     hc.display[data.DisplayAs]){
    ret = hc.display[data.DisplayAs](parts);
  }


return ret;
}


var main = function(req , wrtcb, endcb){
  var no   = req.params.no,
      id   = req.params.id,
      page = req.params.page;

  com(net.frame(req), function(frame){
    console.log(frame)
    frame.no   = no;
    frame.page = page;

    wrtcb(hc.main(frame));
    endcb("ok");

  }).end()
}
exports.main = main;


var state = function(req , wrtcb, endcb){
  var no   = req.params.no,
      id   = req.params.id,
      page = "state";

  req.params.page = page;

  com(net.page(req), function(content){

    content.no   = no;
    content.page = page;

    wrtcb(hc.state(content));
    endcb("ok");

  }).end()

}
exports.state = state;


var io = function(req , wrtcb, endcb){
  var no   = req.params.no,
      id   = req.params.id,
      page = "element";

  req.params.page = page;
  req.params.key  = "";

  com(net.exchange(req), function(data){
    var exchkeys = _.keys(data);


    com(net.page(req), function(elems){
      var noOfi = elems.length;

      for(var i = 0; i < noOfi; i++){
        // keys können wildcard * enthalten
        var pat = new RegExp("^" + elems[i].replace(/\*/g, "[A-Za-z0-9\-_ ]*") + "$");
        // exchange wird nach passenden
        // keys durchsucht (gefiltert)
        var elemkey = _.filter(exchkeys, function(k){
                        return  k.search(pat) > -1;
                      });

        var noOfk   = elemkey.length;
        if(noOfk > 0){
          for(var k = 0; k < noOfk; k++){

            var key  = elemkey[k];
            var stuff = buildExchange(key, data[key]);
            if(!_.isUndefined(stuff)){
              wrtcb(stuff);
            }
          }
        }
      }
      endcb("ok");
    }).end()
  }).end()
}
exports.io = io;