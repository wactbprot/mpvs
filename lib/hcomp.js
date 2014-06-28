/**
 * precompiling of templates
 */
var hc        = {},
    H         = require("handlebars"),
    template  = require("./template");

hc.element        = {};
hc.display        = {};

for( var i in template.element){
  hc.element[i] = H.compile( template.element[i]);
}
for( var j in template.display){
  hc.display[j] = H.compile( template.display[j]);
}

module.exports = hc;