/**
 * Created by LX on 2017/6/8.
 */
var TXMoudle = angular.module('tx', []),
    jqLite = angular.element

TXMoudle
/**
 * input输入框表单
 * @ngdoc directive
 * @name txInputLists
 * @children txInputWrapper,txInputLabel,txInputLabel,txInput
 * @module tx
 * @restrict E *
 * @usage
 *
 *
 * <tx-input-lists>
 *      <tx-input-wrapper>
 *          <tx-input-label>学校名称</tx-input-label>
 *          <tx-input name="schoolName" value="{{schoolName}}"></tx-input>
 *      </tx-input-wrapper>
 *      <tx-input-wrapper>
 *          <tx-input-label>班级名称</tx-input-label>
 *          <tx-input name="className" value="{{className}}"></tx-input>
 *<     /tx-input-wrapper>
 *</tx-input-lists>
 */
    .directive('txInputLists', [function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div ng-transclude></div>',
            compile: function (element, attr) {
                element.addClass('tx-input-lists')
            },
        }
    }])
    .directive('txInputWrapper', [function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="inner-wrapper" ng-transclude></div>',
            compile: function (element, attr) {
                element.addClass('tx-input-wrapper')
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                this.focus = function () {
                    jqLite($element).addClass('tx-input-focus')
                }
                this.blur = function (input) {
                    if (input) return;
                    jqLite($element).removeClass('tx-input-focus')
                }
            }]
        }
    }])
    .directive('txInputLabel', [function () {
        return {
            restrict: 'E',
            compile: function (element, attr) {
                element.addClass('tx-input-label')
            },
            controller: ['$scope', function ($scope) {
            }]
        }
    }])
    .directive('txInput', [function () {
        return {
            restrict: 'E',
            require: '?^txInputWrapper',
            template: '<div class="input-box"><input class="text-input" type="text" ng-focus="focus()" ng-blur="blur()" ng-model="input"/></div>',
            link: function (scope, element, attr, txInputWrapperCtrl) {
                jqLite(element).addClass('tx-input');
                scope.focus = function () {
                    txInputWrapperCtrl.focus();
                    scope[attr.name] = scope.input
                }
                scope.blur = function () {
                    txInputWrapperCtrl.blur(scope.input)
                }
            }
        }
    }])