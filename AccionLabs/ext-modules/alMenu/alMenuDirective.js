"use strict";

angular.module('alMenu').directive('alMenu', ['$timeout', function ($timeout) {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/alMenu/alMenuTemplate.html',
        controller: 'alMenuController',
        link: function (scope, el, attr) {
            var item = el.find('.al-selectable-item:first');
            $timeout(function () {
                item.trigger('click');
            });
        }
    };
}]);