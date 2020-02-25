const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.url);
    console.log(1);

    await next();
    console.log('END');
})

app.use((ctx, next) => {
    console.log(2);
    next();
})

// ctx: context - it has informations about request and response
app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
