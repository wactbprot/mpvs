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

element.Type = "<input type='{{type}}' value='{{value}}' class='type'>";
element.Unit = "<input type='{{type}}' value='{{value}}' class='unit'>";
element.Caption = "<h4>{{value}}</h4>";
element.Atime = "<label>last access time: {{Atime.Value}}{{Atime.Unit}}</label>";
element.Rtime = "<label>start time: {{Rtime.Value}}{{Rtime.Unit}}</label>";
element.Name = "<label>Name: {{value}}</label>";

exports.element = element;

exports.section ="<section>{{{out}}}</section>"
exports.page =""
