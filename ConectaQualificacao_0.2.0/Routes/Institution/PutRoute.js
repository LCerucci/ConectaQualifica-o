import { Router } from "express";
import { InstPutController } from "../../Controller/Instituition/InstPutController.js";

const instPutRoute = Router();
const controller = new InstPutController();

//Update route
instPutRoute.put('/updateInstitution/:id?', (req, res, next) => {
    controller.updateInstitution(req, res, next);
});

export default instPutRoute;