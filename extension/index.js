// ==UserScript==
// @name           Inject Demo
// @description    Demonstrates how to inject Javascript into page's isolated world.
// @include        http://*.*
// @include        https://*.*
// @version        0.1.0
// ==/UserScript==

//function removeWhenDone() {
//    console.info($(this) + ' is removing itself from the DOM.');
//    $(this).remove();
//}

console.info('Script running...');

$(function () {
    $('<script>').attr('src', chrome.extension.getURL('jquery.min.js')).appendTo('body'); //.on('load', removeWhenDone);
    $('<script>').attr('src', chrome.extension.getURL('inject.js')).appendTo('body'); //.on('load', removeWhenDone);
});

//console.dir(unsafeWindow);
//if (unsafeWindow) { console.dir(unsafeWindow.hackMe); }

//var yippieYeah = document.createElement("div");
//yippieYeah.setAttribute("onclick", "return { window: window };");
//console.dir(yippieYeah.onclick());

//$(function () {
//    var yippieYeah = document.createElement("div");
//    yippieYeah.setAttribute("onclick", "return { window: window };");
//    console.dir(yippieYeah.onclick());
//});

//$(function () {
//    var
//        local = 'http://localhost:8888/ajax';
//
//    function payload() {
//        var
//            hackMe,
//            originalFn;
//
//        function getOriginalFunction() {
//            //var
//            //    result,
//            //    tempDiv = $('<div>').on('click', function () { return hackMe; });
//            //result = tempDiv.click();
//            //tempDiv.remove();
//            //return result;
//
//            var yippieYeah = document.createElement("div");
//            yippieYeah.setAttribute("onclick", "return { hackMe: hackMe };");
//            console.dir(yippieYeah);
//            var ret = yippieYeah.onclick();
//            return ret.hackMe;
//
//            //var div = document.createElement("div");
//            //div.setAttribute("onclick", "return hackMe;");
//            //return div.onclick();
//        }
//
//        console.info('I am injected!');
//
//        //originalFn = getOriginalFunction();
//
//        console.dir(window.hackMe);
//
//        if (originalFn && !originalFn.isHacked) {
//            hackMe = function () {
//                var
//                    result = originalFn.apply(null, arguments);
//
//                console.info('Sending AJAX request...');
//
//                $.ajax({
//                    type: 'GET',
//                    url: local,
//                    data: {
//                        count: result
//                    },
//                    cache: false
//                });
//
//                return result;
//            };
//            hackMe.isHacked = true;
//        }
//    }
//
//    function inject(fn) {
//        return '(' + fn + ')();'
//    }
//
//    function removeWhenDone() {
//        console.info($(this) + ' is removing itself from the DOM.');
//        $(this).remove();
//    }
//
//    $('<script>').attr('src', chrome.extension.getURL('jquery.min.js')).appendTo('body').on('load', removeWhenDone);
//    $('<script>').text(inject(payload)).appendTo('body').on('load', removeWhenDone);
//});

//(function () {
//    var
//        local = 'http://localhost:8888',
//        oldDecompress = unsafeWindow.decompress;
//
//    unsafeWindow.decompress = function () {
//        var
//            result;
//
//        result = oldDecompress.apply(null, arguments);
//
//        console.info('DATA> ' + result);
//
//        //jQuery.ajax({
//        //    type: 'POST',
//        //    url: local,
//        //    cache: false,
//        //    data: result
//        //});
//
//        //GM_xmlhttpRequest({
//        //    method: "POST",
//        //    url: local,
//        //    data: result,
//        //    headers: {
//        //        "Content-Type": "application/x-www-form-urlencoded"
//        //    },
//        //    onload: function(response) {
//        //        console.info("posted");
//        //    }
//        //});
//
//        return result;
//    };
//})();
