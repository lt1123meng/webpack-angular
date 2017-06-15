/**
 * Created by LX on 2017/6/15.
 */
require('./work.less')
require('../../main')
    .controller('workLSCtrl',
        function ($scope, $server, $txConfirm,$txToptip) {
            var moment = require('moment');
            $scope.homeworkList = []
            var workDate = new Date();
            $scope.getWorkList = getWorkList
            $scope.getWorkList();
            $scope.delTKWork = function (p_index, index, workId) {
                alert(p_index + ' ,' + index + ' ,' + workId)
                event.preventDefault()
                event.stopPropagation();
                if($scope.homeworkList[p_index].datas.length==1){
                    $scope.homeworkList.splice(p_index,1);
                }else{
                    $scope.homeworkList[p_index].datas.splice(index,1);
                }
                $txConfirm.success({
                    title: '系统消息',
                    content: '你确定要删除吗？',
                    confirmBtn: function () {
                        $server.delTKWork(workId).then(function(data){
                            if(data.status!=200)return;
                            data=JSON.parse(data.data);
                            if (data.status == true) {
                                $txToptip.success({
                                    text: '成功删除一次作业',
                                })
                            }else {
                                $txToptip.error({
                                    text: '删除作业失败',
                                })
                            }
                        })
                    }
                })

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

        })