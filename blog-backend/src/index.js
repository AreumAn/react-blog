const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// Set router
router.use('/api', api.routes());

// Apply bodyParser before router
app.use(bodyParser());

// Apply router to app instance
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
