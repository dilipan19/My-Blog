const express = require('express');
const router = express.Router();
//const User = require('../models/user');
//const bcrypt = require('bcrypt');
const Post = require("../models/Post");
const verifyToken = require("../verifyToken");


//CREATE
router.post("/posts",verifyToken,async(req,res)=>{
try {
  const newPost = new Post({ ...req.body, author: req.user.id })
  const savedPost = await newPost.save();
  res.status(200).json(savedPost)
  
} catch (error) {
  res.status(500).json(error);
}
})

//UPDATE
router.put("/posts/:id",verifyToken,async(req,res)=>{
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(200).json(updatePost);
    
  } catch (error) {
    res.status(500).json(error);
  }
  })

//DELETE
router.delete("/posts/:id",verifyToken,async(req,res)=>{
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted");
    
  } catch (error) {
    res.status(500).json(error);
  }
  })

//GET ALL POST
router.get("/posts",async(req,res)=>{
try {
  const posts = await Post.find()
  res.status(200).json(posts)
  
} catch (error) {
  res.status(500).json(error);
}
})

//GET POST BY ID
router.get("/posts/:id",async(req,res)=>{
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
    
  } catch (error) {
    res.status(500).json(error);
  }
  })

  module.exports=router;