const express=require('express')
const mongoose=require('mongoose')
const exphbs  = require('express-handlebars')
const bosyParser=require('body-parser')
const Todo=require('./models/todo')// 載入 Todo model
const bodyParser = require('body-parser')
const methodOverride=require('method-override')
const port=3000;

const routes=require('./routes')
const app=express()

mongoose.connect('mongodb://127.0.0.1:27017/todo-list')

const db=mongoose.connection

db.on('error',()=>{
    console.log('mongodb error!')
})

db.once('open',()=>{
    console.log('mongodb connected!')
})


// 设置模板引擎
app.engine('.hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(3000,()=>{
    console.log('app is running on http://localhost:3000')
})