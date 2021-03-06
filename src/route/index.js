/**
 * Created by LX on 2017/5/18.
 */
require('../pages/pre/pre');
require('../pages/index/index');
require('../pages/me/me');
require('../pages/func/func');
require('../pages/class/class');
require('../pages/work/work');
import preTPL from '../pages/pre/pre.html';
import homeTPL from '../pages/index/index.html';
import meTPL from '../pages/me/me.html';
import rechargeTPL from '../pages/me/recharge.html';
import regularTPL from '../pages/me/regular.html';
import integrateTPL from '../pages/me/integrate.html';
import orderTPL from '../pages/me/order.html';
import funcTPL from '../pages/func/func.html';
import classTPL from '../pages/class/class.html';
import shareClassCodeTPL from '../pages/class/shareClassCode.html';
import addClassTPL from '../pages/class/addClass.html';
import workLSTPL from '../pages/work/workLS.html';
module.exports=
angular.module('route', ['pre','home','me','func','class','work'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("pre");
        $stateProvider
            .state("pre", {
                url: "/pre",
                controller: "preCtrl",
                template: preTPL,
            })
            // 首页  家长消息页 老师功能页
            .state("home", {
                url: "/home",
                controller: "homeCtrl",
                template: homeTPL,
            })
            //家长功能页
            .state("func", {
                url: "/func",
                controller: "funcCtrl",
                template: funcTPL,
            })
            //我
            .state("me", {
                url: "/me",
                controller: "meCtrl",
                template: meTPL,
            })
            .state("recharge", {
                url: "/recharge",
                controller: "rechargeCtrl",
                template: rechargeTPL,
            })
            .state("regular", {
                url: "/regular",
                controller: "regularCtrl",
                template: regularTPL,
            })
            .state("integrate", {
                url: "/integrate",
                controller: "integrateCtrl",
                template: integrateTPL,
            })
            .state("order", {
                url: "/order",
                controller: "orderCtrl",
                template: orderTPL,
            })
            // 班级
            .state("class", {
                url: "/class",
                controller: "classCtrl",
                template: classTPL,
            })
            .state("share", {
                url: "/share/:class_id",
                controller: "shareClassCodeCtrl",
                template: shareClassCodeTPL,
            })
            .state("add_class", {
                url: "/add_class",
                controller: "addClassCtrl",
                template: addClassTPL,
            })
            // 作业
            .state("work_ls", {
                url: "/work_ls",
                controller: "workLSCtrl",
                template: workLSTPL,
            })
    })
    .name
