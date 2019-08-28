const Koa = require("koa");
const Router = require("koa-router")
const mongoose = require("mongoose")
const body = require("koa-body")

const Users = require("./schema/users")

const app = new Koa;
const router = new Router;

app.use(body())

// 登录
router.post('/login', async (ctx)=>{
  // ctx.set('Content-type: application/json')
  // console.log(ctx.request.body);
  let data = {}
  let {username,password} = ctx.request.body
  await Users.findOne({ //从 users集合里查找用户
    username,
    password
  }).then(user=>{  // 如果找到了 就登录成功
    if(user){
      // console.log(user);
      data = {
        errno: 0
      }
    }else{
      data = {
        errno: 1
      }
    }
    ctx.body = data
  })
  // ctx.body = "这是后台的数据"
  // ctx.body = ctx.request.body

})

// 注册
router.post('/register', async ctx => {
  // console.log(ctx.request.body);
  let data = {}
  let {username, password} = ctx.request.body

  await Users.findOne({
    username
  }).then(user =>{ // 如果找到了 就是注册失败
    // console.log(user);
    if (user) {
      data = {
        errno: 1
      }
    }else{
      data = {
        errno: 0
      }
      // 保存到数据库
      new Users({
        username,
        password,
        age: ~~(Math.random() * 20 + 20)
      }).save()
    }
    ctx.body = data
  })

  // ctx.body = 1
})


// 获取用户信息
router.get('/userlist', async ctx =>{
  let users = {}
  await Users.find().then((res)=>{
    // console.log(res);
    users = res
  })
  ctx.body = users
})

app
  .use(router.routes())
  .use(router.allowedMethods());




mongoose.connect('mongodb://localhost:27018/vuex',{useNewUrlParser: true},(err)=>{
  if(err){
    console.log("数据库连接失败");
    return
  }
  app.listen(3000, () => {
    console.log("监听在3000端口");

  })
  console.log("数据库连接成功");

})