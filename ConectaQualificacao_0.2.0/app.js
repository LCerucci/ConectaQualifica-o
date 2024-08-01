// Dependencies
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import https from 'https';
import fs from 'fs';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';

// Middleware files
import { ErrorHandling } from './Error/ErrorHandling.js';
//import { validadeFields } from './Middlewares/ProcessFields.js';

// Import global variables
dotenv.config();

//Get the current file
const __filename = fileURLToPath(import.meta.url);

//Get the current directory
const __dirname = path.dirname(__filename);

// Server definitions
const app = express(); 

// HTTPS configuration
const sslOptions = {
    key: fs.readFileSync(path.resolve(__dirname, process.env.KEY_PATH)),
    cert: fs.readFileSync(path.resolve(__dirname, process.env.CERT_PATH))
};

https.createServer(sslOptions, app).listen(process.env.PORT_HTTPS, () => {
    console.log(`HTTPS server running on port ${process.env.PORT_HTTPS}`);
});

// HTTPS Redirect Middleware
app.use((req, res, next) => {
    if (!req.secure) 
        return res.redirect(`https://${req.headers.host}${req.url}`);
    next();
});

// Request and Response using JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie definitions
app.use(cookieParser());

// Route files
import adminRoute from './Routes/Admin/AdminRoute.js';

import courseGetRoute from './Routes/Course/GetRoute.js';
import coursePostRoute from './Routes/Course/PostRoute.js';
import coursePutRoute from './Routes/Course/PutRoute.js';
import courseDeleteRoute from './Routes/Course/DeleteRoute.js';

import instGetRoute from './Routes/Institution/GetRoute.js';
import instPostRoute from './Routes/Institution/PostRoute.js';
import instPutRoute from './Routes/Institution/PutRoute.js';
import instDeleteRoute from './Routes/Institution/DeleteRoute.js';

//Admin route
app.use('/admin', adminRoute);

// Course Routes
app.use('/course', courseGetRoute);
app.use('/course', coursePostRoute);
app.use('/course', coursePutRoute);
app.use('/course', courseDeleteRoute);

// Institution Routes
app.use('/institution', instGetRoute);
app.use('/institution', instPostRoute);
app.use('/institution', instPutRoute);
app.use('/institution', instDeleteRoute);

// Morgan to log request errors
app.use(morgan('combined', {
    skip: function (_req, res) { return res.statusCode < 400; }
}));

// Validate existing content
/*app.use((req, res, next) => {
    validadeFields(req, res, next);
});*/

// Error middleware
app.use((err, req, res, _next) => {
    ErrorHandling.HandleError(err, req, res);
});

// Server port
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});