
// imports
const express = require("express");
const ehb = require('express-handlebars');
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload');

require('dotenv').config();

const userRoutes = require("./server/routes/user.js");
const itemRoutes = require("./server/routes/item.js");
const  pdfRoutes = require("./server/routes/pdf.js");
const  loginRoutes = require("./server/routes/login.js");
const  emailRoutes = require("./server/routes/email.js");

const  jwt = require("./server/middlewares/jwt.js")
const  queues = require('./server/queues/queue.js');

// app
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(fileUpload())

// Cookie Parser
app.use(cookieParser())

// Static Files
app.use(express.static('public'));

// Templating Engine
const hbs = ehb.create({ extname: '.hbs', helpers: {
    toJSON : function(object) {
      return JSON.stringify(object);
    }
  }});
app.engine('.hbs', hbs.engine,);
app.set('view engine', '.hbs');

// Routes

// Login Routes
app.use('/login', loginRoutes);

// Middlewares
app.use('/', jwt.authenticateToken);

// PDF Routes
app.use('/pdf', pdfRoutes);

// EMail Routes
app.use('/email', emailRoutes);

// Item Routes
app.use('/item', itemRoutes);

// User Routes
app.use('/', userRoutes);


// Queue Process
queues.process_queues();

// Listen
app.listen(port, () => console.log(`Listening on port ${port}`));
