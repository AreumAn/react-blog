const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Set router
router.get('/', ctx => {
    ctx.body = 'Home';
});

router.get('/about/:name?', ctx => {
    const { name } = ctx.params;
    ctx.body = name ? `${name}'s about` : 'About';
});

router.get('/post', ctx => {
    const { id } = ctx.query;
    ctx.body = id ? `this post id is ${id}` : 'no post id';
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
