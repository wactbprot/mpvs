/**
 * precompiling of templates
 */
var hc        = {},
    H         = require("handlebars"),
    template  = require("./template");

H.registerHelper('state', function() {

  var that = this,
      outer = "",
      inner = "";

  for(var i = 0; i < that.length; i++) {

    for(var j = 0; j < that[i].length; j++) {
      inner = inner + "<li><div class='parallel'>" + that[i][j] + "</div></li>";
    }

  }
  return outer;
});

hc.element        = {};
hc.display        = {};

for( var i in template.element){
  hc.element[i] = H.compile( template.element[i]);
}

for( var j in template.display){
  hc.display[j] = H.compile( template.display[j]);
}

hc.state = H.compile( template.state);

hc.main = H.compile( template.main);

module.exports = hc;