const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const User = require('./model/user')


const app = express()
app.use(
	express.urlencoded({
	  extended: true
	})
  )
app.set('views', path.join(__dirname, 'views'))
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.get("/",async(req,res)=> {
    let pth=path.join(path.join(__dirname, 'static'),'login.html')
	res.sendFile(pth)
})
app.post('/login',async(req,res) =>{
    res.send(req.body)
    console.log(req.body.us);
    console.log(req.body.ps);
})


app.listen(9999, () => {
	console.log('Server up at 9999')
})