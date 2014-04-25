/**
 * Created by pinha_000 on 4/25/14.
 */
/**
 * Created by Pini on 4/25/14.
 */

var byApp = angular.module('byApp',['ui.router']);


//initialisation that should be done once
(function() {
    var body = document.getElementsByTagName('body')[0];
    setInterval(function() {
        var maxHeight = body.clientHeight;
        var scrolledPercent = window.scrollY / maxHeight;
        var imageScroll = 300;
        body.style.backgroundPosition = '0px ' + -(scrolledPercent * imageScroll) + 'px';
    },100);
})();