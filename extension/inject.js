
$(function () {
    var
        originalFn;

    if (window.hackMe) {

        console.info('Gained access to page\'s isolated world.');

        originalFn = window.hackMe;

        if (originalFn && !originalFn.isHacked) {

            window.hackMe = function () {
                var
                    result = originalFn.apply(null, arguments);

                console.info('hackMe() has been hacked.');

                return result;
            };
            window.hackMe.isHacked = true;
        }
    }
});
