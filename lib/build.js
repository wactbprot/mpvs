var _     = require("underscore"),
    hc    = require("./hcomp").hc;

exports.up = function(elemObj, wrtcb, endcb){

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
    wrtcb(hc.section({out:colect}));
  };
  endcb();
};


exports.down = function(templObj){
var elemObj = {};

  return elemObj;
};
