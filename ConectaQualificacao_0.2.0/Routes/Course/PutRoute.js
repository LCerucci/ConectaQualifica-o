import { Router } from "express";
import { CoursePutController } from "../../Controller/Course/CoursePutController.js";

const coursePutRoute = Router();
const controller = new CoursePutController();

//Update Route (working)
coursePutRoute.put('/update/:id?', (req, res, next) => { 
    controller.updateCourse(req, res, next);
});

coursePutRoute.put('/updateRequirement/:id', (req, res, next) => { 
    controller.updateRegisterRequirement(req, res, next);
});

coursePutRoute.put('/updateDeadline/:id', (req, res, next) => {
    controller.updateDeadline(req, res, next)
});

export default coursePutRoute;