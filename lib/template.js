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
