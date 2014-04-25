/**
 * Created by pinha_000 on 4/25/14.
 */

angular.module('byApp').directive('appHeader',[function() {
    var dir = {};
    dir.restrict = 'E';
    dir.replace = true;
    dir.templateUrl = 'modules/common/directives/appHeader/app.header.tpl.html';
    return dir;

}]);
