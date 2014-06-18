exports.title = "<ul>{{#each result}}"
              + "<li>{{this}}</li>"
              + "{{/each}}</ul>";

exports.exchange = "<ul>"
                 + "{{#each result}}"
                 + "<h4>{{@key}}</h4>"
                 + "{{#each this}}"
                 + "<label>{{@key}}</label>"
                 + "<input value='{{this}}'/>"
                 + "{{/each}}"
                 + "{{/each}}"
                 + "</ul>";


var element = {};
/**
 * Bsp:
 * "Type": {
 *     "exchange": true,
 *     "required": true,
 *     "value": "fill_offset",
 *     "type": "text"
 *
 * },
 */

element.Type = "<input type='{{type}}' value='{{value}}'>";
exports.element = element;
exports.section ="<section>{{{out}}}</section>"