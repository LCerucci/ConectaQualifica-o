//dependences
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';

//route files
import courseGetRoute from './Routes/Course/GetRoute.js';
import coursePostRoute from './Routes/Course/PostRoute.js';
import coursePutRoute from './Routes/Course/DeleteRoute.js';
import courseDeleteRoute from './Routes/Course/DeleteRoute.js';

import instGetRoute from './Routes/Institution/GetRoute.js';
import instPostRoute from './Routes/Institution/PostRoute.js';
import instPostRoute from './Routes/Institution/PostRoute.js';
import instDeleteRoute from './Routes/Institution/DeleteRoute.js';

//middlewares files
import { ErrorHandling } from './Error/ErrorHandling.js';
import { validadeFields } from './Middlewares/ProcessFields.js';

const app = express();

//Request and Response using JSON
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: 'true'}));

//Course Routes
app.use('/course', courseGetRoute);
app.use('/course', coursePostRoute);
app.use('/course', coursePutRoute);
app.use('/course', courseDeleteRoute);

//Institution Routes
app.use('/institution', instGetRoute);
app.use('/institution', instPostRoute);
app.use('/institution', instPutRoute);
app.use('/institution', instDeleteRoute);

//Morgan to log Request errors
app.use(morgan('combined', {
    skip: function (_req, res) { return res.statusCode < 400 }
  }));

//Validate existing content
app.use((req, res, next) => {
    validadeFields(req, res, next)
});

//Error middleware
app.use((err, req, res, _next) => {
   ErrorHandling.HandleError(err, req, res);
});

//Server port
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port: ${process.env.PORT}`);
});