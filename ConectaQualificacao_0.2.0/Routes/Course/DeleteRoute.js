import { Router } from "express";
import { CourseDeleteController } from "../../Controller/Course/CourseDeleteController";

const courseDeleteRoute = Router();
const controller = new CourseDeleteController();

//Delete Route
courseDeleteRoute.delete('/delete/:id', (req, res, next) => {
    controller.deleteCourse(req, res, next)
});

export default courseDeleteRoute;