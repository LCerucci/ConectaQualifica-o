import { ErrorHandling } from "../../../Error/ErrorHandling.js";
import { SQLError } from "../../../Error/InternalError.js";
import { connectionPool } from "../../DBConnection.js";

export class CourseCreateDAO {

    //Constructor to avoid static use.
    constructor() {
    }
    //Course Table
    async createCourse(idInstitution, name, field, description, degree, tuitionFee) {
        try {
            const [result] = await connectionPool.execute(
                `INSERT INTO Course(idInstitution, name, field, description, degree, tuitionFee) VALUES (?, ?, ?, ?, ?, ?)`, 
                [idInstitution, name, field, description, degree, tuitionFee]);

            if (result.affectedRows > 0) 
                return result;
            else
                throw new SQLError("Something went worong on CourseDAO");

        }
        catch (err) {
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    //RegisterRequirement Table
    async createRegisterRequirement(idCourse, registerRequirement) {
        try {
            const { educationLevel, ageRange, gender, firstJob, freeCourse } = registerRequirement;
            const [result] = await connectionPool.execute(
                `INSERT INTO RegisterRequirement(idCourse, educationLevel, ageRange, gender, firstJob, freeCourse) VALUES(?,?,?,?,?,?)`, 
                [idCourse, educationLevel, ageRange, gender, firstJob, freeCourse]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch (err) {
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    //RegisterDeadline Table
    async createRegisterdDeadline(idCourse, deadline) {
        try {
            const { fromDate, toDate } = deadline;
            const [result] = await connectionPool.execute(
                `INSERT INTO Deadline(idCourse, fromDate, toDate) VALUES(?,?,?)`, 
                [idCourse, fromDate, toDate]);

            if (result.affectedRows > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");
            
        }
        catch (err) {
            ErrorHandling.HandleError(err);
            return null;
        }
    }
}