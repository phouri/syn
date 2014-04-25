/**
 * Created by pinha_000 on 4/25/14.
 */

angular.module('byApp').directive('appFooter',[function() {
    var dir = {};
    dir.restrict = 'E';
    dir.replace = true;
    dir.templateUrl = 'modules/common/directives/appFooter/app.footer.tpl.html';
    return dir;

}]);
