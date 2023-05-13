const { user }=require('../Module/user');
const sequelize=require("sequelize")



exports.update= async (req,res)=>{
    const email=req.params.email;
    const password=req.params.password;

    await user.update(password, {
        where: {
          email
        }
      }).then((data)=>{
        res.send("updated");
      })
}

// async(req,res)=>{
//     const username=req.params.username;
//     const password=req.body.password;

//     let update=await usermodule.updatenewuser(username,password)
//     if(update)
//     res.send('updated successfully')
//     else
//     res.send('Failed to update')
// }