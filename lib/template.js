exports.title = "<ul>{{#each result}}"
              + "<li>{{this}}</li>"
              + "{{/each}}</ul>";

exports.element = "<ul>"
                + "{{#each result}}"
                + "<li>{{@key}}</li>"
                + "{{/each}}"
                + "</ul>";