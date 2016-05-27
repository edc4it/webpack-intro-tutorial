import msg from "./contents.ts";
import "./message.css";
import * as $ from "jquery";
$(() => {
    $("<div id='message'>")
        .text(msg + "!")
        .appendTo("body");
});

