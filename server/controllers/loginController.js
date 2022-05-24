const jwt = require('jsonwebtoken');

const generateAccessToken = (jwt_user) =>{
    return jwt.sign(jwt_user, process.env.JWT_SECRET);      
}


// View Login
exports.view = (req, res) => {
    res.render('login');  
}

// Login User
exports.login = (req, res) => {
    const accessToken = generateAccessToken('admin')
    // console.log(accessToken);
    
    // res.cookie('token', accessToken)

    // res.render('home');
    res.json({
        accessToken
    });  
}