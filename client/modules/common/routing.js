/**
 * Created by Pini on 4/25/14.
 */
byApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locProvider) {
    $locProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "/modules/home/home.tpl.html"
        });
}]);