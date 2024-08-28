import { Router } from "express";
import { InstDeleteController } from "../../Controller/Instituition/InstDeleteController.js";
import { Authentication } from '../../Middlewares/LoginAuth.js';

const instDeleteRoute = Router();
const controller = new InstDeleteController();

//Delete 
instDeleteRoute.delete('/delete/:id?', Authentication, (req, res, next) => {
    controller.deleteInstitution(req, res, next);
});

export default instDeleteRoute;