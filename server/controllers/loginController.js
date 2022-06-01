const jwt = require("jsonwebtoken");
const cron = require('../cron/cron.js');
const bg = require('../utils/background.js'); 
// let redis = import('../db/redis.mjs') 
const  queue  = require('../queues/queue.js')

let redis;
async function loadMyModule() {
    const { set_value,  get_value} = await import('../db/redis.mjs');
    redis = { set_value,  get_value}
}

loadMyModule();

const generateAccessToken = (jwt_user) =>{
    return jwt.sign(jwt_user, process.env.JWT_SECRET);      
}


// View Login
exports.view = (req, res) => {

    res.render('login', { hideNave: true });  
}

// Login User
exports.login = (req, res) => {
    const accessToken = generateAccessToken('admin')
    // console.log(accessToken);
    
    res.cookie('token', accessToken)

    // cron
    cron.cron1();

    // background
    bg.backgroundfunction();
    
    // redis 
    redis.set_value('admin', 'hello');

    // enqueue
    queue.enqueue({'hello': 'from queue world'});

    // res.render('home');
    res.redirect("/")

    // res.json({
    //     accessToken
    // });  
}

// Logout User
exports.logout = async(req, res) => {
    // redis 
    console.log(await redis.get_value('admin'));

    res.clearCookie('token')

    res.redirect("/login")
}