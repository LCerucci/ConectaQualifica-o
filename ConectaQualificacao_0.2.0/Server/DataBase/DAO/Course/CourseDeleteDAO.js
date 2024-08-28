import { ErrorHandling } from '../../../Error/ErrorHandling.js';
import { connectionPool } from "../../DBConnection.js";
import { CourseGetDAO } from './CourseGetDAO.js';

const Get = new CourseGetDAO();

export class CourseDeleteDAO {

    //Constructor to avoid static use.
    constructor() {
    }

    //Course table
    //This operation works in cascade on DB.
    async deleteCourseById(idCourse) {
        try {
            if (Get.verifyCourse(idCourse)) {
                const [result] = await connectionPool.execute(
                    `DELETE FROM Course WHERE idCourse=?`, 
                    [idCourse]);

                if (result.affectedRows > 0) {
                    console.log(`Object(Course) deleted successufully!`);
                    return result;
                }
                else
                    throw new SQLError("Error at CourseDAO");
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.HandleError(err);
            return null;
        }
    }
}