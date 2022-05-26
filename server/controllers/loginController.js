const jwt = require('jsonwebtoken');

const generateAccessToken = (jwt_user) =>{
    return jwt.sign(jwt_user, process.env.JWT_SECRET);      
}

const cron = require('../cron/cron')


// View Login
exports.view = (req, res) => {
    res.render('login');  
}

// Login User
exports.login = (req, res) => {
    const accessToken = generateAccessToken('admin')
    // console.log(accessToken);
    
    res.cookie('token', accessToken)

    // cron
    cron.cron1();
    
    // res.render('home');
    res.redirect("/")

    // res.json({
    //     accessToken
    // });  
}

// Logout User
exports.logout = (req, res) => {
    res.clearCookie('token')

    res.redirect("/login")
}