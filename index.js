const express = require('express')
const app = express()
const port = 3000

// 可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了
app.use(express.static('public'))
// 通过带有 /static 前缀地址来访问 public 目录中的文件了
app.use('/static', express.static('public'))


app.get('/',(req,res)=>res.send('hello world'))
app.get('/login',(req,res)=>{
    let params = req.query
    console.log(params)
    console.log('everybody is here now')
    res.send({
          isSuccess : true,
          msg : '请求成功',
          data : {name:'express',version:'2.3.4'},
          code : 0
    })
})

// app.get('/user/get',(req,res) => {
//   console.log(req);
//   console.log(res);
//   res.send("get访问成功");
// })

// app.post('/user/post',(req,res) => {
//   console.log(req);
//   console.log(res);
//   res.send("post访问成功");
// })


app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(port, ()=>console.log(`*********服务器启动成功*********\nexample app listen on port ${port}!`))

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})