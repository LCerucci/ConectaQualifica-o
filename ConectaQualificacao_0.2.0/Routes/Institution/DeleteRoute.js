import { Router } from "express";
import { InstDeleteCoontroller } from "../../Controller/Instituition/InstDeleteController.js"

const instDeleteRoute = Router();
const controller = new InstDeleteCoontroller();

//Delete 
instDeleteRoute.delete('/delete/:id?', (req, res, next) => {
    controller.deleteInstitution(req, res, next);
});

export default instDeleteRoute;