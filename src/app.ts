import msg from "./contents.ts";
import "./message.scss";
import * as $ from "jquery";
$(() => {
    $("<div id='message'>")
        .text(msg + "!")
        .appendTo("body");
});

