const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser')

//const bodyParser = require('body-parser'); // No longer Required
//const mysql = require('mysql'); // Not required -> moved to userController

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Cookie Parser
app.use(cookieParser())

// Static Files
app.use(express.static('public'));

// Templating Engine
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');


// Login Routes
const loginRoutes = require('./server/routes/login');
app.use('/login', loginRoutes);

// Middlewares
const jwtAuth = require('./server/middlewares/jwt');
app.use('/', jwtAuth.authenticateToken);

// PDF Routes
const pdfRoutes = require('./server/routes/pdf');
app.use('/pdf', pdfRoutes);

// User Routes
const userRoutes = require('./server/routes/user');
app.use('/', userRoutes);



app.listen(port, () => console.log(`Listening on port ${port}`));