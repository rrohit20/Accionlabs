"use strict";

angular.module('alMenu').directive('alMenuGroup', function () {
    return {
        require: '^alMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/alMenu/alMenuGroupTemplate.html',
        link: function (scope, el, attrs, ctrl) {
            scope.isOpen = false;
            scope.closeMenu = function () {
                scope.isOpen = false;
            };
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;

                if (el.parents('.al-subitem-section').length == 0)
                    scope.setSubmenuPosition();

                ctrl.setOpenMenuScope(scope);
            };
            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.al-subitem-section').length > 0;
            };

            scope.setSubmenuPosition = function () {
                var pos = el.offset();
                $('.al-subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
            };
        }
    };
});