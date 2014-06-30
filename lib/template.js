var element = {};
element.Caption = "<h4>{{value}}</h4>";

element.Type    = "<label>Type:</label>"
                + "<input value='{{value}}' class='type'>";

element.Unit    = "<label>Unit:</label>"
                + "<input type='{{type}}' value='{{value}}' class='unit'>";

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
                       + "<input type='submit' value='ok'"
                       + "</form>";
exports.display = display;

exports.main ="<!DOCTYPE HTML>"
             + "<html>"
             + "<head>"
             + "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />"
             + "<link type='text/css' rel='stylesheet'  href='http://localhost:5984/mp_db/_design/dbmp/css/main.css' />"
             + "<title>{{Name}}</title>"
             + "</head>"
             + "<body>"
             + "<header>"
             + "<h1>{{Name}}</h1>"
             + "<h2>{{Description}}</h2>"
             + "<nav>"
             + "<ul>"
             + "{{#each Title}} "
             + "<li><a href='./{{@index}}'>{{this}}</a></li>"
             + "{{/each}}"
             + "</ul>"
             + "</nav>"
             + "</header>"
             + "<aside>"
             + "<h3>Sidebar</h3>"
             + "<nav>"
             + "<ul>"
             + "<li>State</li>"
             + "<li>Elements</li>"
             + "<li>Recipes</li>"
             + "</ul>"
             + "</nav>"
             + "</aside>"
             + "<footer>"
             + "<p>Lorum ipsum.</p>"
             + "</footer>"
             + "</body>"
             + "</html>";
