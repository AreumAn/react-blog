const Koa = require('koa');

const app = new Koa();

// ctx: context - it has informations about request and response
app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
