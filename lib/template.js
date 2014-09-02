var _      = require("underscore"),
    fs     = require("fs"),
    h      = require("handlebars");

var tmplexp = function(path, hc, struct){

  var ff = fs.readdirSync(path);
  hc = hc || {};

  for(var i = 0; i < ff.length; i++){

    var cf    = ff[i],
        cpath = path + cf,
        cstat = fs.lstatSync(cpath),
        pat   = /\.html$/;

    if(cstat.isFile() && cf.search(pat) > -1){
      var tmplname   = cf.replace(pat, ""), // z.B.: main
          tmplstring = fs.readFileSync(cpath, "utf-8")
      if(struct){
        if(_.isUndefined(hc[struct])){
          hc[struct] = {};
        }
        hc[struct][tmplname] =  h.compile(tmplstring);
      }else{
        hc[tmplname] = h.compile(tmplstring);
      }
    }

    if(cstat.isDirectory()){
      tmplexp(cpath +"/", hc, cf)
    }
  }
  return hc;
}

module.exports = tmplexp("./templates/")
