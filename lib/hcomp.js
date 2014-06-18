var hc        = {},
    H         = require("handlebars"),
    template  = require("./template");

console.log(template)
hc.element = {};
hc.element.Type = H.compile( template.element.Type );
hc.section        = H.compile( template.section )
module.exports.hc = hc;