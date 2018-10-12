const path   = require('path');
const views  = require('koa-views');
const Koa    = require('koa');
const Router = require('koa-router');

const app    = new Koa();
const router = new Router();

app.use(views(path.join(__dirname + '/'), {
  map: {
    html: 'handlebars'
  }
}));


router.get('/', async function(ctx, next) {
    const data = { version: 1, message: "Hello World!", time: new Date() };
    console.log('router.get /', data);
    await ctx.render('index', { data });
});

app.use(router.routes());

if (!module.parent) app.listen(80);
console.log('Server running on 80');
