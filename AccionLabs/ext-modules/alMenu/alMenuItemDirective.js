"use strict";

angular.module('alMenu').directive('alMenuItem', function () {
    return {
        require: '^alMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/alMenu/alMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {

            scope.isActive = function () {
                return el === ctrl.getActiveElement();
            };

            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.al-subitem-section').length > 0;
            }

            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});