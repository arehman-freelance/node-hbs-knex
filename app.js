
// imports
import express from "express";
import { create } from 'express-handlebars';
import cookieParser from "cookie-parser"
import fileUpload from 'express-fileupload';

import './server/utils/dotenv.cjs'
import userRoutes from "./server/routes/user.js"
import {authenticateToken} from "./server/middlewares/jwt.js"
import pdfRoutes from "./server/routes/pdf.js"
import loginRoutes from "./server/routes/login.js"
import emailRoutes from "./server/routes/email.js"

import {process_queues} from './server/queues/queue.cjs'

// app
const app = express();
const port = process.env.PORT || 5001;

// middlewares
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(fileUpload())

// Cookie Parser
app.use(cookieParser())

// Static Files
app.use(express.static('public'));

// Templating Engine
const hbs = create({ extname: '.hbs', });
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Routes

// Login Routes
app.use('/login', loginRoutes);

// Middlewares
app.use('/', authenticateToken);

// PDF Routes
app.use('/pdf', pdfRoutes);

// EMail Routes
app.use('/email', emailRoutes);

// User Routes
app.use('/', userRoutes);


// Queue Process
process_queues();

// Listen
app.listen(port, () => console.log(`Listening on port ${port}`));
