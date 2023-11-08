const express=require('express')
const router=express.Router()

const Todo=require('../../models/todo')

router.get('/new',(req,res)=>{
    return res.render('new')
})

router.get('/:id',(req,res)=>{
    const id=req.params.id
    return Todo.findById(id)
        .lean()
        .then((todo)=>res.render('detail',{todo}))
        .catch(error=>console.error(error))
})

router.get('/:id/edit',(req,res)=>{
    const id=req.params.id
    return Todo.findById(id)
        .lean()
        .then((todo)=>res.render('edit',{todo}))
        .catch(error=>console.error(error))
})

router.post('/',(req,res)=>{
    const name=req.body.name// 從 req.body 拿出表單裡的 name 資料
    
    return Todo.create({name})// 存入資料庫
        .then(()=>res.redirect('/'))// 新增完成後導回首頁
        .catch(error=>console.error(error))
    })

router.put('/:id',(req,res)=>{
    const id=req.params.id
    const {name,isDone}=req.body
    console.log(req.body)
    return Todo.findById(id)
        .then(todo=>{
            todo.name=name
            //todo.isDone=isDone==='on' 等於以下if寫法
            if(isDone==='on'){
                todo.isDone=true
            }else{
                todo.isDone=false
            }
            return todo.save()
        })
        .then(()=>res.redirect(`/todos/${id}`))
        .catch(error=>console.error(error))
    })

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    return Todo.findById(id)
        .then(todo=>todo.deleteOne())
        .then(()=>res.redirect('/'))
        .catch(error=>console.error(error))
})
module.exports = router