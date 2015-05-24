// ==UserScript==
// @name           Inject Demo
// @description    Demonstrates how to inject Javascript into page's isolated world.
// @include        http://*.*
// @include        https://*.*
// @version        0.1.0
// ==/UserScript==

console.info('Script running...');

$(function () {
    $('<script>').attr('src', chrome.extension.getURL('jquery.min.js')).appendTo('body'); //.on('load', removeWhenDone);
    $('<script>').attr('src', chrome.extension.getURL('inject.js')).appendTo('body'); //.on('load', removeWhenDone);
});
