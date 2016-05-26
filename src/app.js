var msg = require("./contents.js");
require("./message.css");
var $ = require("jquery");
$(function(){
    $("<div id='message'>")
        .text(msg+"!")
        .appendTo("body");
});

