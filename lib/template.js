var element = {};
element.Caption = "<h4>{{value}}</h4>";

element.Type    = "<label>Type:</label>"
                + "<input value='{{value}}' class='type'>";

element.Unit    = "<label>Unit:</label>"
                + "<input type='{{type}}' value='{{value}}' class='unit' list='unit-{{key}}'>"
                + "<datalist id='unit-{{key}}'>"
                + "{{#each options}}"
                + "<option value='{{this}}'>"
                + "{{/each}}"
                + "</datalist>";

element.Value   = "<label>Value:</label>"
                + "<input type='text' value='{{value}}' "
                + "pattern='[+-]?[0-9]{0,5}[\.][0-9]{0,5}[eE]?[+-]?[0-9]{1,3}' class='val'>";

element.Comment = "<label>Comment:</label>"
                + "<input type='{{text}}' placeholder='comment the point' class='comment'>";

exports.element = element;

var display = {};
display.pressureForm = "<form action='/' methode='post'>"
                       + "{{{Caption}}}"
                       + "{{{Type}}}"
                       + "{{{Unit}}}"
                       + "{{{Value}}}"
                       + "{{{Comment}}}"
                     + "<input type='submit' value='ok'>"
                       + "</form>";
exports.display = display;

exports.state = "<h1>state</h1>"
              + "<p>{{#each}}"
              + "<div class='serial'>{{#each this}}"
              + "<div class='{{this}} parallel'></div>"
              + "{{/each}}</div>"
              + "{{/each}}</p>";


exports.main ="<!DOCTYPE HTML>"
             + "<html>"
             + "<head>"
             + "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />"
             + "<link type='text/css' rel='stylesheet'  href='../../css/main.css' />"
             + "<title>{{Name}}</title>"
             + "</head>"
             + "<body>"
             + "<header>"
             + "<h1>{{Name}}</h1>"
             + "<h2>{{Description}}</h2>"
             + "</header>"
             + "<nav>"
             + "<ul>"
             + "{{#each Title}} "
             + "<li><a href='../io/{{@index}}'>{{this}}</a></li>"
             + "{{/each}}"
             + "</ul>"
             + "</nav>"
             + "<section id='content' class='content-{{page}}'>"
             + "<a href='../content/{{page}}/{{no}}'>../content/{{page}}/{{no}}</a>"
             + "</section>"
             + "<aside>"
             + "<ul>"
             + "<li><a href='../element/{{no}}'>I/O</a></li>"
             + "<li><a href='../state/{{no}}'>State</a></li>"
             + "<li><a href='../recipe/{{no}}'>Recipe</a></li>"
             + "<li><a href='../id/{{no}}'>Id</a></li>"
             + "</ul>"
             + "</aside>"
             + "<footer>"
             + "<p>Lorum ipsum.</p>"
             + "</footer>"
             + "</body>"
             + "</html>";
