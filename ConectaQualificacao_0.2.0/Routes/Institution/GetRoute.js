import { Router } from "express";
import { InstGetController } from "../../Controller/Instituition/InstGetController.js";

const instGetRoute = Router();
const controller = new InstGetController();

//Get route
instGetRoute.get('/all', (req, res, next) => {
    controller.getAllInstitution(req, res, next)
});

instGetRoute.get('/selectInstitution/:id?', (req, res, next) => {
    controller.getInstitutionById(req, res, next)
});

instGetRoute.get('/byName/:name?',(req, res, next) => {
    controller.SearchInstitutionByName(req, res, next)
});

instGetRoute.get('/byEducationLevel/:educationLevel?', (req, res, next) => {
    controller.searchInstitutionByEducationLevel(req, res, next)
});

export default instGetRoute;