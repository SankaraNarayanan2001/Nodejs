const { private }=require('../modules/db');


exports.private=(req,res)=>{
    console.log(req.user);
    res.json({private});
}