
const {check, validationResult} = require('express-validator');
const { users }=require('../modules/db')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const signup = async (req,res)=>{
   const {email , password} = req.body;

   //validate the input
   const error=validationResult(req);
   console.log(error);

   if(!error.isEmpty()){
    return res.status(400).json({
        error :error.array()
    })
   }
   // validate if the user dosnt already exist;

   let user=users.find((user)=> {
      return user.email==email
   });

   if(user){
       return res.status(400).json({
        "error": [
            {
             
                "msg": "This user already exist",
              
            }
        ]
       })
   }

   const hasedpassword=await bcrypt.hash(password,5);
   console.log(hasedpassword);

   users.push({
    email,
    password:hasedpassword
   });

   const token=await jwt.sign({
    email,
    password
   },'niadsbibaibfbisadbif')

res.json({token})

   
}


const login=async (req,res)=>{
    const {email,password}=req.body;

    let user=users.find((user)=>{
     return user.email===email
    });

    if(!user){
     return res.status(400).json({
      "error": [
          {
          
              "msg": "invalid users",
         }
      ]
     })
 }
 // check if the password if valid

 let isMatch=await bcrypt.compare(password,user.password);

 if(!isMatch){
    return res.status(400).json({
        "error":[
            {
                "msg":"invalid users"
            }
        ]
    })
 }

 const token = await jwt.sign({email,password},'niadsbibaibfbisadbif');

 res.json({token});

 }

 const all=(req,res)=>{
    res.json(users);
}

module.exports={
    signup,
    login,
    all
}