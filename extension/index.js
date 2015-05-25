// ==UserScript==
// @name           Inject Demo
// @description    Demonstrates how to inject Javascript into page's isolated world.
// @include        http://*.*
// @include        https://*.*
// @version        0.1.0
// ==/UserScript==

$(function () {

    console.info('Script running...');

    function loadExtensionScript(src) {
        $('<script>').attr('src', chrome.extension.getURL(src)).appendTo('body').remove();
    }

    loadExtensionScript('jquery.min.js');
    loadExtensionScript('inject.js');
});
