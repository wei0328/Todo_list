const express=require('express')
const router=express.Router()

const Todo=require('../../models/todo')// 載入 Todo model

router.get('/',(req,res)=>{
    Todo.find()// 取出 Todo model 裡的所有資料
        .lean()// 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
        .sort({ _id: 'asc' })// 根據 _id 升冪排序
        .then(todos=>res.render('index',{todos}))// 將資料傳給 index 樣板
        .catch(error=>console.error(error))// 錯誤處理
})

module.exports=router