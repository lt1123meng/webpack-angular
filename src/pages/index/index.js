/**
 * Created by LX on 2017/5/18.
 */
require('./index.less')
angular.module('home', [])
    .controller('homeCtrl', function ($scope, $http, $state, $rootScope, $initData, $initBaseInfo, $server, $initVIPInfo) {
        // 初始化数据
        if (!$rootScope.info) {
            $initBaseInfo.init(VIPCallback)
        }
        function VIPCallback() {
            if (!$rootScope.LSvipInfo || !$rootScope.JZvipInfo) {
                $initVIPInfo.init()
            } else {
                initJZData()
            }
        }

        if (sessionStorage.crid == 'LS') {
            initLSData()
        } else {
            initJZData()
        }
        $rootScope.$on('JZVIP', function () {
            initJZData();
            $scope.currentStudentDetail = $rootScope.JZvipInfo[$scope.currentStudentIndex]
        })
        $rootScope.$on('LSVIP', function () {
            initLSData();
        })
        // 切换角色
        $scope.userClick = function () {
            $rootScope.Popup = {
                mast: true,
                changeRole: true,
            }
        }
        $scope.chooseRole = function (role) {
            event.stopPropagation();
            for (let key in $rootScope.Popup) {
                $rootScope.Popup[key] = false
            }
            if (role == $rootScope.info.crid) return;
            $rootScope.info.crid = role;
            sessionStorage.crid = role
            if (!$rootScope[role + 'vipInfo']) {
                $initVIPInfo.init()
            }
            if (role != 'LS') {
                initJZData()
            } else {
                initLSData()
            }
        }
        // 更改时间
        $scope.calenderClick = function () {
            $rootScope.Popup = {
                mast: true,
                chooseCalender: true,
            }
        }
        // 切换当前学生
        $scope.currentStudentIndex = 0;
        $scope.currentStudentDetail;
        $scope.chooseStu = function () {
            $rootScope.Popup = {
                mast: true,
                chooseStu: true,
            }
        }
        $scope.chooseThisStu = function (index) {
            event.stopPropagation();
            for (let key in $rootScope.Popup) {
                $rootScope.Popup[key] = false
            }
            $scope.currentStudentIndex = index
            $scope.currentStudentDetail = $rootScope.JZvipInfo[$scope.currentStudentIndex]
        }
        // 老师角色路由跳转
        $scope.goRoute = function (route) {
            $state.go(route);
        }
        // 附录
        function initLSData() {
            $scope.moduleList = $initData.homeModule.LS;
        }

        function initJZData() {
            $server.getJZAllList().then(function (data) {
                if (data.status != 200) {
                    return
                }
                data = data.data
                $scope.indexList = data;
            })
        }
    })