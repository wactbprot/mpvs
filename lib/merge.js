var _         = require("underscore");

var vout = function(){
// stub
}
exports.vout = vout;

var vin = function(structdata, exdata){
  //{-----     elements/0
  //
  //    "result": {
  //        "ctrl_client": {
  //            "Name": {
  //                "type": "text",
  //                "required": true
  //            },
  //            "Atime": {
  //                "type": "integer"
  //            }
  //        }
  //    }
  //
  //}
  //{-----     exchange
  //
  //    "result": {
  //        "ctrl_client": {
  //            "Name": "",
  //            "Password": "",
  //            "Atime": ""
  //        },
  //        "target_fill": {
  //            "Value": null,
  //            "Unit": "mbar"
  //        }
  //    }
  //
  //}
  if(structdata &&
     structdata.result &&
     exdata &&
     exdata.result)
    var s = structdata.result,
        e = exdata.result;

  for(var i in s){
    // bsp i: ctrl_client
    if(e[i] &&
       _.isObject(e[i])){
      for(var j in e[i]){
        // bsp j: Name
        if(s[i][j] &&
           _.isObject(s[i][j])){

          s[i][j].value = e[i][j];

        }
      }
    }
  }

  return {result:s};
}
exports.vin = vin;
