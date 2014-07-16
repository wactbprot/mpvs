/**
 * precompiling of templates
 */
var hc        = {},
    H         = require("handlebars"),
    template  = require("./template");

H.registerHelper('state', function() {

  var that = this,
      s = "";

  for(var i = 0; i < that.length; i++) {
    s = s + "<div class='serial'>"
    for(var j = 0; j < that[i].length; j++) {
      var state = that[i][j];
      s = s + "<div class='parallel "+ state +"'>"
        + "<a href='../../recipe/"
        + i
        + "/"
        + j
        + "' target='_blank'>"
        + i
        + "/"
        + j
        + "</a>"
        + "</div>";
    }
    s = s + "</div>"
  }
  return s;
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