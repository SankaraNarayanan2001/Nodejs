const { user }=require('../Module/user');
const sequelize=require("sequelize")
const multer=require('multer');
const express=require('express');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

exports.change=upload.single('image'), async (req, res) => {
  
  
    try {
      const id=req.pramas;
     
        // email:req.body.email,
        // password:req.body.password,
       const filename=req.file.filename;
      

    
      const value=await user.findByPk(id);
      if(!value){
        return res.status(404).json({message:'user not found'});
      }
      // Create a new record in the Image table
      await user.update({filename},{where:id});
    
  
      res.status(200).json({ message: 'Image uploaded successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to upload image.' });
    }
  

}
  

