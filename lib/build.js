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
        // I'm sure it turns out here
        // what kind of "hc.section"
        // is needed e.g.:
        // if one finds a Type, Unit, Value
        // Structure  hc.form should be used ...
        // ... otherwise section or...
        // /implement logic here/
      }
    }
    wrtcb(hc.section({out:colect}));
  };
  endcb("ok");
};


exports.down = function(templObj){
var elemObj = {};

  return elemObj;
};
