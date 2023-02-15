const express=require('express')
const router=express.Router()
const blogModel=require('../models/blogModel')
router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        let {title,Image,Description}=req.body
        let date=new Date  
        let originaldate=date.toLocaleString().split(",")
        const newBlog=await blogModel.create({
            title,Image,Description,
            created_at:originaldate[0]
        })
        res.json({
            message:"successfully added blog",
            newBlog:newBlog,status:"success"
        })
    } catch (error) {
        res.json({
            error:error,
            status:"failed"
        })
    }
})
router.get('/',async(req,res)=>{
    try {
        const allBlogs=await blogModel.find()
        return res.json(allBlogs)
    } catch (error) {
        return res.json(error)
    }
})
router.put('/put/:id',async(req,res)=>{
    try {      
        let id=req.params.id, comment=req.body.comment       
        const blog=await blogModel.findByIdAndUpdate(id,{ $push: { comments: comment } },{ new: true })
        // console.log(blog)
        res.json(blog)       
    } catch (error) {
        res.status(400).send(error)       
    }
})
module.exports=router