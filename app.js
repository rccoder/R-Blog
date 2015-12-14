var koa = require('koa');
var koa_jade = require('koa-jade');
var koa_static_cache = require('koa-static-cache');
var bodyparser = require('koa-bodyparser');
var flash = require('koa-flash');
var session = require('koa-generic-session');
var MongoStore = require('koa-generic-session-mongo');

//init app
var app = koa();

// x-response-time
app.use(function *(next) {
    var start  = new Date();
    yield next;
    var ms = new Date() - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next) {
    var start  = new Date();
    yield next;
    var ms = new Date() - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});
// static file
app.use(koa_static_cache('./static'));

// jade templates
var jade = new koa_jade({
    viewPath: './views'
});
app.use(jade.middleware);

// router
require('./routes/index')(app);
require('./routes/admin')(app);

// listen the port
app.listen(3000, function() {
    console.log('Listen Port 3000')
});
