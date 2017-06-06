/**
 * Created by LX on 2017/6/6.
 */
require('./class.less')
var indexApp = require('../../main');
indexApp
    .controller('classCtrl', function ($server, $scope, $http, $state, $rootScope, $initData, $initBaseInfo, $initIntegrate) {
        $server.getClassList().then(function (data) {
            if (data.status != 200) {
                return
            }
            data = data.data
            $scope.classList = data
        })
        // 分享班级二维码
        $scope.shareClass = function (class_id) {
            $state.go('share', {
                class_id: class_id
            })
        }
    })
    .controller('shareClassCodeCtrl', function ($server, $scope, $http, $state, $stateParams, $rootScope, $initData, $initBaseInfo, $initIntegrate) {
        var class_id = $stateParams.class_id;
        // 获得基本数据
        $server.getShareClassCodeList(class_id).then(function (data) {
            if (data.status != 200) {
                return
            }
            data = data.data
            if(data.status) {
                $scope.codeDetail = data.msg
            }
        })
        // 返回
        $scope.back=function(){
            window.history.go(-1)
        }
    })