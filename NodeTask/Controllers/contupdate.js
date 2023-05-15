const { user }=require('../Module/user');
const sequelize=require("sequelize")

const express=require('express');
const path=require('path');



 exports.change=  async function (req, res){
 
      const file=req.file;
      const id=req.params.id;


       if(file){
  
     
    
  
      res.status(200).json({ message: 'Image uploaded successfully.' });
    }
      
     else{
     
       res.status(500).json({ error: 'Failed to upload image.' });
     }
      
    }

    
  

     
      
     