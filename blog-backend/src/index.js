require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connect to MongoDB');
}).catch(e => {
    console.log(e);
});

const api = require('./api');

const app = new Koa();
const router = new Router();

// Set router
router.use('/api', api.routes());

// Apply bodyParser before router
app.use(bodyParser());

// Apply router to app instance
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(4000, () => {
    console.log('Listening to port %d', port);
});
