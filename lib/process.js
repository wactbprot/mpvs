var _     = require("underscore"),
    H     = require("handlebars"),
    S     = require("./template.js");

// var t =  H.compile( S.title ),
//    d = {result:["c1","c2"]};
// console.log(t(d));

var get = function(req){
  var uri     = req.url,
      methode = req.methode;
  var t =  H.compile( S.title ),
      d = {result:["c1","c2"]};

return t(d);
};
exports.get = get;