exports.title = "<ul>{{#each result}}"
              + "<li>{{this}}</li>"
              + "{{/each}}</ul>";

// http://localhost:8002/sim/exchange
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
                 + "<h4>{{@key}}</h4>"
                 + "{{#each this}}"
                 + "<label>{{@key}}</label>"
                 + "<input value='{{this}}'/>"
                 + "{{/each}}"
                 + "{{/each}}"
                 + "</ul>";

// http://localhost:8001/mpdef/element/0
//{
//
//    "result": {
//        "ctrl_client": {
//            "Name": {
//                "type": "text",
//                "required": true
//            },
//            "Atime": {
//                "type": "integer"
//            }
//        }
//    }
//
//}
exports.element = "{{#each result}}"
                + "<form>"
                + "<label>{{@key}}</label>"
                + "{{#each this}}"
                + "<label>{{@key}}</label>"
                + "<input value='{{this.value}}' type='{{this.type}}'/>"
                + "{{/each}}"
                + "<button>submit</button>"
                + "{{/each}}";
               