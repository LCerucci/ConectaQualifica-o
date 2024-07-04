import { Router } from "express";
import { CoursePostConstroller } from "../../Controller/Course/CoursePostController.js";

const coursePostRoute = Router();
const controller = new CoursePostConstroller();

//Post Route (working)
coursePostRoute.post('/newCourse/:id?', (req, res, next) => {
    controller.createNewCourse(req, res, next)
});
                                      
coursePostRoute.post('/newRequirement/:id', (req, res, next) =>{
    controller.createNewRegisterRequirement(req, res, next)
});

coursePostRoute.post('/newDeadline/:id', (req, res, next) => {
    controller.createNewDeadline(req, res, next)
});

export default coursePostRoute;