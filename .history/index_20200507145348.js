const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=>res.send('hello world'))
app.get('/shenya',(req,res)=>{
    let name = req.query
    console.log(name.name)
    console.log('shenya is big idot')
    res.send({
        "message":'NI hao'
    })
})


app.listen(port, ()=>console.log(`example app listen on port ${port}!`))