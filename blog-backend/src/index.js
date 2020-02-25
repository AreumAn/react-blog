const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Set router
router.get('/', ctx => {
    ctx.body = 'Home';
});

router.get('/about', ctx => {
    ctx.body = 'About';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
