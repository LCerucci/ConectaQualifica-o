import { Router } from "express";
import { InstPutController } from "../../Controller/Instituition/InstPutController.js";
import { Authentication } from '../../Middlewares/LoginAuth.js';

const instPutRoute = Router();
const controller = new InstPutController();

//Update route
instPutRoute.put('/updateInstitution/:id?', Authentication, (req, res, next) => {
    controller.updateInstitution(req, res, next);
});

export default instPutRoute;