import { Router } from "express";
import { AdminController } from "../../Controller/Admin/AdminController.js";
import { Authentication } from "../../Middlewares/LoginAuth.js";

const adminRoute = new Router();
const controller = new AdminController();

adminRoute.get('/login', (req, res, next) => {
    controller.login(req, res, next);
});

adminRoute.delete('/logout', Authentication, (req, res, next) => {
    controller.logout(req, res, next);
});

export default adminRoute;