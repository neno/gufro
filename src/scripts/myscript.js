;(function (win, doc, undefined) {
    'use strict';

    function hello(name) {
        var s = 'Hello ' + name;
        console.log(s);
    }

    var me = 'World';
    hello(me);

})(document, window);
