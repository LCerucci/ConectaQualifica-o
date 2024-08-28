import { Router } from "express";
import { InstPostController } from "../../Controller/Instituition/InstPostController.js";
import { Authentication } from '../../Middlewares/LoginAuth.js';

const instPostRoute = Router();
const controller = new InstPostController();

//Post route
instPostRoute.post('/newInstitution', Authentication, (req, res, next) => {
    controller.createNewInstitution(req, res, next);
});

export default instPostRoute;