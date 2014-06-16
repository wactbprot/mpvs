exports.title = "<ul>{{#each result}}"
              + "<li>{{this}}</li>"
              + "{{/each}}</ul>";



//{
//
//    "result": {
//        "ctrl_client": {
//            "Name": "",
//            "Password": "",
//            "Atime": ""
//        },
//        "target_fill": {
//            "Value": null,
//            "Unit": "mbar"
//        }
//    }
//
//}
exports.exchange = "<ul>"
                 + "{{#each result}}"
                 + "<h4>{{this}}</h4>"
                 + "{{/each}}"
                 + "</ul>";