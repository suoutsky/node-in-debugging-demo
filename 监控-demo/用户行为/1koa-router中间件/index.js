const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

// 添加路由

router.get('/', async(ctx, next) => {
  ctx.response.body = `<h1>index, page`;
});


app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})