var koa_router = require('koa-router');
var crypto = require('crypto');
var validator = require('validator');

var Models = require('../lib/core');

var site = require('../config/config').site;

var $User = Models.$User();
var $Post = Models.$Post();

var register = function (app) {

    var router = new koa_router();

    router.get('/', function *() {

        var posts = yield $Post.getAllPost();
        this.render('index/index',
            {
                site: site,
                flash: this.flash,
                posts: posts
            }
        );
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
        console.log($User.getAllUser());
        this.render('index/login');
    });

    router.post('/login', function *(next) {
        var data = this.request.body;

        var userInfo = yield $User.getUserByName(data.name);

        console.log(userInfo)
        if (!userInfo || (userInfo.password != data.password)) {
            this.flash = {error: '用户不存在或密码错误'};
            return this.redirect('/');
        }

        this.session.user = {
            name: data.name,
            email: data.email
        }

        this.flash = {success: '登录成功'};
        return this.redirect('/admin');

    });

    app.use(router.routes());
    app.use(router.allowedMethods());
};

module.exports = register;