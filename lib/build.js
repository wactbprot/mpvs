var _     = require("underscore"),
    hc    = require("./hcomp"),
    all = {};

all.main = {}
all.element = {};



all.element.up = function(elemObj, wrtcb, endcb){
  var secs = _.keys(elemObj);

  for(var i = 0; i < secs.length; i++){
    var sec     = elemObj[secs[i]];
    var seckeys = _.keys(sec);
    var colect  = "";

    for(var j = 0; j < seckeys.length; j++){
      var skey = seckeys[j];
      if(hc.element[skey]){
        colect = colect + hc.element[skey](sec[skey]);
      }
    }

    wrtcb(hc.section({part:colect}));

  };
  endcb("ok");
};


all.element.down = function(templObj){
var elemObj = {};

  return elemObj;
};


all.main.up = function(mainObj, wrtcb, endcb){
  wrtcb(hc.main(mainObj));

  endcb("ok");
}
module.exports = all;