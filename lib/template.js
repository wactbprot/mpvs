var element = {};
element.Type    = "<input type='{{type}}' value='{{value}}' class='type'>";
element.Unit    = "<input type='{{type}}' value='{{value}}' class='unit'>";
element.Value   = "<input value='{{this}}' class='val'>";
element.Caption = "<h4>{{value}}</h4>";
element.Name    = "<label>Name: {{value}}</label>";

exports.element = element;

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
