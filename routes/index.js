var koa_router = require('koa-router');
var crypto = require('crypto');
var validator = require('validator');

var Models = require('../lib/core');

var $User = Models.$User();

var register = function (app) {

    var router = new koa_router();

    router.get('/', function *() {
        this.render('index/index');
    });

    router.get('/reg', function *() {
        this.render('index/reg');
    });

    router.post('/reg', function *() {
        var data = this.request.body;

        var userExit = yield $User.getUserByName(data.name);

        console.log(userExit)
        if (userExit) {
            this.flash = {error: '用户名已经存在'};
            return this.redirect('/');
        };

        yield $User.addUser(data);

        this.session.user = {
            name: data.name,
            email: data.email
        };

        this.flash = {success: '注册成功'};
        this.redirect('/');
    });

    router.get('/login', function *(next) {

    });

    app.use(router.routes());
    app.use(router.allowedMethods());
};

module.exports = register;