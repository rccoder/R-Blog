var koa_router = require('koa-router');

var Models = require('../lib/core');

var site = require('../config/config').site;

var $Tag = Models.$Tag();
var $Class = Models.$Class();
var $User = Models.$User();
var $Post = Models.$Post();

var register = function (app) {

    var router = new koa_router({
        prefix : '/admin'
    });

    router.get('/', function *(next) {
        this.render('admin/index',
            {
                site: site,
                flash: this.flash
            }
        );
    });
    
    router.get('/logout', function *(next) {
        this.session.user = null;
        this.redirect('/');
    });

    router.post('/post', function *(next) {
        var data = this.request.body;

        yield $Post.addPost(data);

        this.flash = {success: '发表成功'};
        this.redirect('/admin');
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
};

module.exports = register;