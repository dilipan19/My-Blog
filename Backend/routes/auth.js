const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register',async(req,res)=>{
  try {
    const {username,password}=req.body;
    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hashSync(password,salt);
    const newUser = new User({username,password:hashedPassword});
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
})

//LOGIN
router.post("/login",async(req,res)=>{
  try {
    const user = await User.findOne({username:req.body.username})
    if(!user){
      return res.status(404).json("User Not Found")
    }
    const match = await bcrypt.compareSync(req.body.password,user.password)
    if(!match){
      return res.status(401).json("wrong credentials!")
    }
    const token = jwt.sign({id:user._id},process.env.SECRET,{expiresIn:"3d"})
    //const {password,...info}=user
    
    res.status(200).json({token})
    
  } catch (error) {
    res.status(500).json(error);
    
  }
})

//logout

router.post('/logout', (req, res) => { 
   
  res.status(200).json({ message: "Logout successful" }); 
});


module.exports=router;