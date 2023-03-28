const Koa = require('koa')
const app = new Koa()


app.use(async ctx => {
ctx.body = "Hello Manoooooooooooooo"
})

const PORT = 5000
app.listen(process.env.PORT || PORT, ()=> console.log('Rodou hahaha'))