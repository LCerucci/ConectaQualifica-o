import { Router } from "express";
import { CourseDeleteController } from "../../Controller/Course/CourseDeleteController.js";
import { Authentication } from "../../Middlewares/LoginAuth.js";

const courseDeleteRoute = Router();
const controller = new CourseDeleteController();

//Delete Route
courseDeleteRoute.delete('/delete/:id', Authentication, (req, res, next) => {
    controller.deleteCourse(req, res, next)
});

export default courseDeleteRoute;