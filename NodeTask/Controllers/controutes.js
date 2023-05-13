const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
// const check=require('../middleware/check')
const user=require('../Module/user')
const express=require("express")


exports.signup=async (req, res) => {
    const { email, password } = req.body;


    const hasedpassword = await bcrypt.hash(password, 5);


    user.create(
        { email, password: hasedpassword }
    ).then((data) => {

        res.setHeader('Content-Type', 'text/plain');
        res.end('successfully signed up')
    }).catch((err) => {
        res.setHeader('Content-Type', 'text/plain');
        res.end('user already exists')
    })
}

exports.login=(req, res) => {
    const { email, password } = req.body;

    user.findOne({
        where: {
            email
        }
    }).then((user) => {
        bcrypt.compare(password, user.password, async function (err, result) {
            if (result) {
                const token=await jwt.sign({
                    result
                   },'niadsbibaibfbisadbif',{ expiresIn: '10m' })
                
                res.json({token})
            } else {
                res.setHeader('Content-Type', 'text/plain');
                res.end('Login fail.');
            }
        });
    }).catch((err) => {
        res.setHeader('Content-Type', 'text/plain');
        res.end('invalid user');
    });
}

// exports.update=async (req,res)=>{
//     console.log(req.user);
    
// }




exports.delete=(req,res)=>{
    const item=req.params;
user.destroy({
    where: {
        email:item
    }
})

}