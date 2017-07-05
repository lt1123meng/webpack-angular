/**
 * Created by LX on 2017/5/18.
 */
import indexApp from '../main';

indexApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("pre");
    $stateProvider
        .state("pre", {
            url: "/pre",
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/pre/pre.html'], function (require) {
                    var template = require('../pages/pre/pre.html');
                    deferred.resolve(template);
                }, 'pre-tpl');
                return deferred.promise;
            },
            resolve: {
                'pre': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/pre/pre.js'], function () {
                        var mod = require('../pages/pre/pre.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'pre-ctrl');
                    return deferred.promise;
                }
            },
            controller: "preCtrl",
        })
        // 首页  家长消息页 老师功能页
        .state("home", {
            url: "/home",
            controller: "homeCtrl",
            // template: homeTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/index/index.html'], function (require) {
                    var template = require('../pages/index/index.html');
                    deferred.resolve(template);
                }, 'home-tpl');
                return deferred.promise;
            },
            resolve: {
                'home': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/index/index.js'], function () {
                        var mod = require('../pages/index/index.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'home-ctrl');
                    return deferred.promise;
                }
            }
        })
        //家长功能页
        .state("func", {
            url: "/func",
            controller: "funcCtrl",
            // template: funcTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/func/func.html'], function (require) {
                    var template = require('../pages/func/func.html');
                    deferred.resolve(template);
                }, 'func-tpl');
                return deferred.promise;
            },
            resolve: {
                'func': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/func/func'], function () {
                        var mod = require('../pages/func/func');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'funcCtrl');
                    return deferred.promise;
                }
            }
        })
        //我
        .state("me", {
            url: "/me",
            controller: "meCtrl",
            // template: meTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/me/me.html'], function (require) {
                    var template = require('../pages/me/me.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'me': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/me/me.js'], function () {
                        var mod = require('../pages/me/me.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        .state("recharge", {
            url: "/recharge",
            controller: "rechargeCtrl",
            // template: rechargeTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/me/recharge.html'], function (require) {
                    var template = require('../pages/me/recharge.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'recharge': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/me/me.js'], function () {
                        var mod = require('../pages/me/me.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        .state("regular", {
            url: "/regular",
            controller: "regularCtrl",
            // template: regularTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/me/regular.html'], function (require) {
                    var template = require('../pages/me/regular.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'regular': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/me/me.js'], function () {
                        var mod = require('../pages/me/me.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        .state("integrate", {
            url: "/integrate",
            controller: "integrateCtrl",
            // template: integrateTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/me/integrate.html'], function (require) {
                    var template = require('../pages/me/integrate.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'integrate': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/me/me.js'], function () {
                        var mod = require('../pages/me/me.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        .state("order", {
            url: "/order",
            controller: "orderCtrl",
            // template: orderTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/me/order.html'], function (require) {
                    var template = require('../pages/me/order.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'order': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/me/me.js'], function () {
                        var mod = require('../pages/me/me.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        // 班级
        .state("class", {
            url: "/class",
            controller: "classCtrl",
            // template: classTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/class/class.html'], function (require) {
                    var template = require('../pages/class/class.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'class': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/class/class.js'], function () {
                        var mod = require('../pages/class/class.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        .state("share", {
            url: "/share/:class_id",
            controller: "shareClassCodeCtrl",
            // template: shareClassCodeTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/class/shareClassCode.html'], function (require) {
                    var template = require('../pages/class/shareClassCode.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'share': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/class/class.js'], function () {
                        var mod = require('../pages/class/class.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });

                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        .state("add_class", {
            url: "/add_class",
            controller: "addClassCtrl",
            // template: addClassTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/class/addClass.html'], function (require) {
                    var template = require('../pages/class/addClass.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'addClass': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/class/class.js'], function () {
                        var mod = require('../pages/class/class.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
        // 作业
        .state("work_ls", {
            url: "/work_ls",
            controller: "workLSCtrl",
            // template: workLSTPL,
            templateProvider: function ($q) {
                var deferred = $q.defer();
                require.ensure(['../pages/work/workLS.html'], function (require) {
                    var template = require('../pages/work/workLS.html');
                    deferred.resolve(template);
                }, 'me-tpl');
                return deferred.promise;
            },
            resolve: {
                'workLs': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['../pages/work/work.js'], function () {
                        var mod = require('../pages/work/work.js');
                        $ocLazyLoad.inject({
                            name: 'indexApp'
                        });
                        deferred.resolve(mod.controller);
                    }, 'meCtrl');
                    return deferred.promise;
                }
            }
        })
})
