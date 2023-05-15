// const { user }=require('../Module/user');
const sequelize=require("sequelize")
const multer=require('multer');
const express=require('express');

const upload=multer({dest:'upload/'});

exports.update= upload.single('file'),async (req,res)=>{
  const email= await req.pramas.email;

  const file=await req.file;

  res.send("success");
}

