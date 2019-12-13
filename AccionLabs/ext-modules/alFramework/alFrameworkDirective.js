"use strict";

angular.module("alFramework").directive("alFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "alFrameworkController",
        templateUrl: "ext-modules/alFramework/alFrameworkTemplate.html"
        
    };
});