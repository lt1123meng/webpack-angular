/**
 * Created by LX on 2017/6/15.
 */
require('./work.less')
angular.module('work', [])
    .controller('workLSCtrl',
        function ($scope, $server, $txPopup, $txToptip) {
            var disable = false
            var moment = require('moment');
            $scope.homeworkList = []
            var workDate = new Date();
            $scope.getWorkList = getWorkList
            $scope.getWorkList();
            $scope.delWork = function (p_index, index, type, workId, classId) {
                event.preventDefault()
                event.stopPropagation();
                $txPopup.confirm({
                    title: '系统消息',
                    content: '你确定要删除吗？',
                    confirmBtn: function () {
                        if (type == 'TW') {
                            $server.delTWWork(workId, classId).then(function (data) {
                                if (data.status != 200)return;
                                delWorkState(data.data == 'success', p_index, index)
                            })
                        } else {
                            $server.delTKWork(workId).then(function (data) {
                                if (data.status != 200)return;
                                data = JSON.parse(data.data);
                                delWorkState(data.status == true, p_index, index)

                            })
                        }
                    }
                })
            }
            $scope.getWeiNum = function (type, TWType, TKType, work_id, class_id, name, num) {
                if (num + '' == '0') return;
                if (disable) return;
                disable = true
                event.preventDefault()
                event.stopPropagation();
                if (type == 'TW') {
                    $server.getTWWei(TWType, class_id, work_id).then(function (data) {
                        disable = false
                        if (data.status != 200) return;
                        $txPopup.alert({
                            title: name,
                            content: JSON.parse(data.data).student_name,
                        })
                    })
                }
                if (type == 'TK') {
                    $server.getTKWei(TKType, work_id).then(function (data) {
                        disable = false
                        if (data.status != 200) return;
                        data = JSON.parse(data.data).datas.data;
                        var str = ''
                        for (var i = 0; i < data.length; i++) {
                            str += data[i].stu_name + '   '
                        }
                        $txPopup.alert({
                            title: name,
                            content: str,
                        })
                    })
                }

            }
            function getWorkList() {
                if ($scope.more == 'no')return
                $server.postWorkAll(workDate).then(function (data) {
                    if (data.status != 200) {
                        return
                    }
                    if (data.data == '{}') {
                        $scope.more = 'no';
                        return;
                    }
                    data = JSON.parse(data.data);
                    $scope.homeworkList.push(data);
                    workDate = moment(data.pubtime, 'YYYY-MM-DD')
                })
            }
            function delWorkState(state, p_index, index) {
                if (state) {
                    if ($scope.homeworkList[p_index].datas.length == 1) {
                        $scope.homeworkList.splice(p_index, 1);
                    } else {
                        $scope.homeworkList[p_index].datas.splice(index, 1);
                    }
                    $txToptip.success({
                        text: '成功删除一次作业',
                    })
                } else {
                    $txToptip.error({
                        text: '删除作业失败',
                    })
                }
            }

        })