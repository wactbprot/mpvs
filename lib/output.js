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
      wrtcb(buildElement(data))
    }
    if(_.isFunction(endcb)){
      endcb("ok");
    }
  }).end();
};
exports.exchange = exchange;

var buildElement = function(data){
  var ret,
      parts = {id  : data.id,
               no  : data.no,
               key : data.key}

  for(var e in data){
    if(hc.element[e]){
      parts[e]    = hc.element[e](data);
    }
  }

  if(data.DisplayAs &&
     hc.display[data.DisplayAs]){
    ret = hc.display[data.DisplayAs](parts);
  }
  return ret;
};


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


var taskstate = function(req , wrtcb, endcb){
  var no   = req.params.no,
      id   = req.params.id,
      co   = {id:id,
              key:no,
              struct:"taskstate"}

  com(net.get(co), function(content){
    content.no   = no;
    content.page = co.struct;
    wrtcb(hc.state(content));
    endcb("ok");

  }).end()

}
exports.taskstate = taskstate;


var io = function(req , wrtcb, endcb){
  var no   = req.params.no,
      id   = req.params.id,
      key  = req.params.key,
      co   = {id:id,
              key:no,
              struct:"containerelements"};

  if(key){
    co.subkey = key;
    com(net.get(co), function(obj){
      if(_.isObject(obj) &&
         _.isObject(obj[key])){
        var res = buildElement(obj[key]);
        if(res){
          wrtcb(res);
        }
      }
      endcb("ok");
    }).end()
  }else{
    com(net.get(co), function(obj){
         if(_.isObject(obj)){
        for(var k in obj){

          var res = buildElement(obj[k], id, no);
          if(res){
            wrtcb(res);
          }
        }
      }
      endcb("ok");
    }).end()
  }
}
exports.io = io;
