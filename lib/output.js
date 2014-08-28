var _         = require("underscore"),
    bunyan    = require("bunyan"),
    com       = require("./com"),
    net       = require("./net"),
    hc        = require("./template"),
    deflt     = require("./default"),
    log       = bunyan.createLogger({name: deflt.appname});

var exchange = function(req , wrtcb, endcb){
  var key    = req.params.key,
      id     = req.params.id,
      co     = {id:id,
                key:key,
                struct:"exchange"}
  com(net.get(co), function(data){

    if(_.isFunction(wrtcb)){
      wrtcb(buildExchange(id, key, data))
    }
    if(_.isFunction(endcb)){
      endcb("ok");
    }
  }).end();
};
exports.exchange = exchange;

var buildExchange = function(id, key, data){

  var ret,
      parts  = {id  : id,
                key : key};

  for(var e in data){
    if(hc.element[e]){
      if(_.isArray(data[e])){
        for(var l = 0; l < data[e].length; l++){
          data[e][l].id = id;
          data[e][l].key = key;
        }
      }
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
      co   = {id:id,
              key:"",
              struct:"frame"}

  com(net.get(co), function(frame){
    log.info({ok:true}, "get frame data")
    frame.no   = no;
    frame.page = req.params.page;
    wrtcb(hc.main(frame));
    endcb("ok");

  }).end()
}
exports.main = main;


var state = function(req , wrtcb, endcb){
  var no   = req.params.no,
      id   = req.params.id,
      co   = {id:id,
              key:no,
              struct:"state"}

  com(net.get(co), function(content){
    content.no   = no;
    content.page = co.struct;
    wrtcb(hc.state(content));
    endcb("ok");

  }).end()

}
exports.state = state;


var io = function(req , wrtcb, endcb){
  var no   = req.params.no,
      id   = req.params.id,
      co   = {id:id,
              key:"",
              struct:"exchange"}
  com(net.get(co), function(data){
    var exchkeys = _.keys(data);
    co.key    = no;
    co.struct = "element";

    com(net.get(co), function(elems){
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

            var key   = elemkey[k],
                stuff = buildExchange(id, key, data[key]);
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