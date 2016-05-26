var msg = require("./contents.js");
require("./message.css");
var div = document.createElement("div");
div.id="message";
var txtNode = document.createTextNode(msg);
div.appendChild(txtNode);
document.body.appendChild(div);

