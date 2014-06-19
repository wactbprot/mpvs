/**
 * precompiling of templates
 */
var hc        = {},
    H         = require("handlebars"),
    template  = require("./template");

hc.element        = {};

for( var i in template.element){
  hc.element[i]   = H.compile( template.element[i]);
}

hc.section        = H.compile( template.section )
module.exports = hc;