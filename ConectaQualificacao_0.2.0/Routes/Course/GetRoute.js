import { Router } from "express";
import { CourseGetController } from "../../Controller/Course/CourseGetController.js";

const courseGetRoute = Router();
const controller = new CourseGetController();

//Get Route (working)
courseGetRoute.get('/all', (req, res, next) => {
    controller.getAllCourses(req, res, next);
});

courseGetRoute.get('/selectCourse/:id?', (req, res, next) => {
    controller.getCourseById(req, res, next)
});

courseGetRoute.get('/name/:name?', (req, res, next) => {
    controller.searchCourseByName(req, res, next);
});

courseGetRoute.get('/fee/:fee?', (req, res, next) => {
    controller.searchCourseByFee(req, res, next)
});

courseGetRoute.get('/field/:field?', (req, res, next) => {
    controller.SearchCourseByField(req, res, next);
});

courseGetRoute.get('/degree/:degree?', (req, res, next) => {
    controller.searchCourseByDegree(req, res, next);
});

courseGetRoute.get('/byInstitution/:id?', (req, res, next) => {
    controller.searchCourseByInstitution(req, res, next);
});

export default courseGetRoute;