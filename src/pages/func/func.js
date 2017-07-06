/**
 * Created by LX on 2017/5/27.
 */

require('./func.less')
require('../index/index.less')
angular.module('func', [])
    .controller('funcCtrl', function ($scope, $http, $state, $rootScope, $initData, $initBaseInfo, $initIntegrate) {
        if (!$rootScope.info) {
            $initBaseInfo.init()
        }
        if (!$rootScope.integrade) {
            $initIntegrate.init()
        }
        $scope.moduleList = $initData.homeModule.JZ;
        $scope.goRecharge = function () {
            $state.go('recharge')
        }
    })
