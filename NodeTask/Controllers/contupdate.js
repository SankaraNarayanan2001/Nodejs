const user = require('../Module/user');

exports.change = async function (req, res) {

  const userfile = req.file;
  const userid = req.params['id'];

  const findval = await user.findByPk(userid)

  if (!findval) {
    return res.send("user not found")
  }
  else {
    if (userfile) {
      await user.update({ image: userfile.filename }, { where: { id: userid } })
      res.send("user updated successfully ☺☻♥")
    }
    else {
      res.send("please upload image")
    }
  }

}






