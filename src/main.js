/**
 * Created by LX on 2017/5/18.
 */
require('./base.less')
require('./common.less')
require('./framework/tx/angular-tx.less')
var angular = require('angular')
require('angular-ui-router')
require('oclazyload')
require('./framework/tx/angular-tx')
angular.module('indexApp',
    [
        'oc.lazyLoad',
        'ui.router',
        'tx',
        require('./route/index'),
        require('./common')
    ]);