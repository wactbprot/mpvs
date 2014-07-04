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

element.Document    = "<label>Select Document:</label>"
                    + "<input type='text'  placeholder='start typing in Sign or Customer or ...' class='unit' list='documentselect'>"
                    + "<datalist id='documentselect'>"
                    + "{{#each this}}"
                    + "<option value='{{Sign}} {{Year}}'>"
                    + "{{/each}}"
                    + "</datalist>";


exports.element = element;

var display = {};
display.pressureForm   = "<form action='/' methode='post'>"
                       + "{{{Caption}}}"
                       + "{{{Type}}}"
                       + "{{{Unit}}}"
                       + "{{{Value}}}"
                       + "{{{Comment}}}"
                       + "<input type='submit' value='ok'>"
                       + "</form>";

display.documentSelect = "<form action='/' methode='post'>"
                       + "{{{Document}}}"
                       + "<input type='submit' value='ok'>"
                       + "</form>";

exports.display = display;

exports.state = "<h2>state of container {{no}}</h2>"
              + "<p>{{#each}}"
              + "<div class='serial'>{{#each this}}"
              + "<div class='{{this}} parallel'>{{this}}</div>"
              + "{{/each}}</div>"
              + "{{/each}}</p>";


exports.main ="<!DOCTYPE HTML>"
             + "<html>"
             + "<head>"
             + "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />"
             + "<link type='text/css' rel='stylesheet'  href='../../css/main.css' />"
             + "<script type='text/javascript' src='../../js/jquery-2.1.1.min.js'></script>"
             + "<script type='text/javascript' src='../../js/dl.js'></script>"
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
             + "<main id='content' class='{{page}}'>"
             + "<a href='/{{Id}}/content/{{page}}/{{no}}'>{{page}}/{{no}}</a>"
             + "</main>"
             + "<aside>"
             + "<ul>"
             + "<li><a href='/{{Id}}/io/{{no}}'>I/O</a></li>"
             + "<li><a href='/{{Id}}/state/{{no}}'>State</a></li>"
             + "<li><a href='/{{Id}}/recipe/{{no}}'>Recipe</a></li>"
             + "<li><a href='/{{Id}}/id/{{no}}'>Id</a></li>"
             + "</ul>"
             + "</aside>"
             + "<footer>"
             + "<ul>"
             + "<li>"
             + "<a href='https://github.com/wactbprot/mpvs' target='_blank'>mpvs@github</a></p>"
             + "</li>"
             + "<li>"
             + "<a href='https://github.com/wactbprot/ssmp' target='_blank'>ssmp@github</a></p>"
             + "</li>"
             + "<li>"
             + "<a href='https://github.com/wactbprot/csmp' target='_blank'>csmp@github</a></p>"
             + "</li>"
             + "</ul>"
             + "</footer>"
             + "</body>"
             + "</html>";
