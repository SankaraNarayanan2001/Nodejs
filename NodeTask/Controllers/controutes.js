const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const user = require('../Module/user')



exports.signup = async (req, res) => {
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

exports.login = (req, res) => {
    const { email, password } = req.body;

    user.findOne({
        where: {
            email
        }
    }).then((user) => {
        bcrypt.compare(password, user.password, async function (err, result) {
            if (result) {
                const token = await jwt.sign({
                    email
                }, 'niadsbibaibfbisadbif', { expiresIn: '10m' })

                res.json({ token })
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

exports.delete = async (req, res) => {
    const id = await req.params['id'];

    try {
        const deleteRow = await user.destroy({
            where: {
                id: id
            }
        });
        res.send(' deleted ');
    } catch (error) {
        res.send('Error deleteing row')
    }

}

exports.all = (req, res) => {
    user.findAll().then(data => {
        res.send(data)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });
}

