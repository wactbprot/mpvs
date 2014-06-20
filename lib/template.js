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

exports.section ="<section>{{{part}}}</section>"
exports.main ="<!DOCTYPE HTML>"
             + "<html>"
             + "<head>"
             + "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />"
             + "<title>{{title}}</title>"
             + "</head>"
             + "<body>"
             + "<header>"
             + "<h1>Logo</h1>"
             + "<nav>"
             + "<ul>"
             + "<li>Container 1</li>"
             + "<li>Container 2</li>"
             + "<li>Container 3</li>"
             + "</ul>"
             + "</nav>"
             + "</header>"
             + "<section>"
             + "<article>"
             + "<header>"
             + "<h3>Title</h3>"
             + "<p>Runs since <time></time></p>"
             + "</header>"
             + "<p>Lorum ipsum.</p>"
             + "</article>"
             + "</section>"
             + "<aside>"
             + "<h3>Sidebar</h3>"
             + "<nav>"
             + "<ul>"
             + "<li>State</li>"
             + "<li>Elements</li>"
             + "<li>Recipes</li>"
             + "<li>Exchange</li>"
             + "</ul>"
             + "</nav>"
             + "</aside>"
             + "<footer>"
             + "<p>Lorum ipsum.</p>"
             + "</footer>"
             + "</body>"
             + "</html>";
