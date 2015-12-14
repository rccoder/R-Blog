var koa_router = require('koa-router');


var register = function (app) {

    var router = new koa_router({
        prefix : '/admin'
    });
    router.get('/', function *(next) {
        this.render('admin/index');
    });
    

    app.use(router.routes());
    app.use(router.allowedMethods());
};

module.exports = register;