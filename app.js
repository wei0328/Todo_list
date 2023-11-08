const express=require('express')

const exphbs  = require('express-handlebars')
const bosyParser=require('body-parser')
const bodyParser = require('body-parser')
const methodOverride=require('method-override')
const port=3000;

const routes=require('./routes')
const app=express()

require('./config/mongoose')


// 设置模板引擎
app.engine('.hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(3000,()=>{
    console.log('app is running on http://localhost:3000')
})

