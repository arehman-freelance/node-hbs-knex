import jwt from "jsonwebtoken";
import * as cron from '../cron/cron.js'
import * as bg from '../utils/background.js' 
import * as redis from '../db/redis.js' 


const generateAccessToken = (jwt_user) =>{
    return jwt.sign(jwt_user, process.env.JWT_SECRET);      
}


// View Login
export const view = (req, res) => {

    res.render('login');  
}

// Login User
export const login = (req, res) => {
    const accessToken = generateAccessToken('admin')
    // console.log(accessToken);
    
    res.cookie('token', accessToken)

    // cron
    cron.cron1();

    // background
    bg.backgroundfunction();
    
    // redis 
    redis.set_value('admin', 'hello');

    // res.render('home');
    res.redirect("/")

    // res.json({
    //     accessToken
    // });  
}

// Logout User
export const logout = async(req, res) => {
    // redis 
    console.log(await redis.get_value('admin'));

    res.clearCookie('token')

    res.redirect("/login")
}