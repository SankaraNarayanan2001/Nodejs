const bcrypt = require('bcrypt');

const user=require('../module/user')

exports.signUp= async (req, res) => {
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

exports.login= (req, res) => {
    const { email, password } = req.body;

    user.findOne({
        where: {
            email
        }
    }).then((user) => {
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                res.setHeader('Content-Type', 'text/plain');
                res.end('Login successful.');
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