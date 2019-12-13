"use strict";

angular.module('alDashboard').directive('alDashboard', function () {
    return {
        templateUrl: 'ext-modules/alDashboard/alDashboardTemplate.html',
        link: function (scope, element, attrs) {
            scope.addNewWidget = function (widget) {
                var newWidget = angular.copy(widget.settings);
                scope.widgets.push(newWidget);
            }
        }
    };
});