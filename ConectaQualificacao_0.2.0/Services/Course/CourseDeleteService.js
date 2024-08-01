import { CourseDeleteDAO } from "../../DataBase/DAO/Course/CourseDeleteDAO.js";

const Delete = new CourseDeleteDAO();

export class CourseDeleteService{
    constructor(){
    }

    async deleteCourse(idCourse) {
        try {
            const result = await Delete.deleteCourseById(idCourse);

            if (result !== null)
                return result;
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }
}