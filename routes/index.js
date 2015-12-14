var koa_router = require('koa-router');

var register = function (app) {

    var router = new koa_router();
    router.get('/', function *(next) {
        //this.body = yield this.render('index')
        this.render('index/index');
    });

    router.get('/login', function *(next) {

    });

    app.use(router.routes());
    app.use(router.allowedMethods());
};

module.exports = register;