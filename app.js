const express=require('express')
const mongoose=require('mongoose')
const app=express()

mongoose.connect('mongodb://127.0.0.1:27017/todo-list')

const db=mongoose.connection

db.on('error',()=>{
    console.log('mongodb error!')
})

db.once('open',()=>{
    console.log('mongodb connected!')
})

app.get('/',(req,res)=>{
    res.send('hello!!')
})

app.listen(3000,()=>{
    console.log('app is running on http://localhost:3000')
})