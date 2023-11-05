const express=require('express');
const mongoose=require('mongoose');
const exphbs  = require('express-handlebars');
const port=3000;


const app=express()

// 设置模板引擎
app.engine('.hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');

mongoose.connect('mongodb://127.0.0.1:27017/todo-list')

const db=mongoose.connection

db.on('error',()=>{
    console.log('mongodb error!')
})

db.once('open',()=>{
    console.log('mongodb connected!')
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log('app is running on http://localhost:3000')
})