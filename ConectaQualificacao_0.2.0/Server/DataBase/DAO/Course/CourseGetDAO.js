import { ErrorHandling } from "../../../Error/ErrorHandling.js"
import { SQLError } from "../../../Error/InternalError.js";
import { connectionPool } from "../../DBConnection.js";

export class CourseGetDAO{

    //Constructor to avoid static use.
    constructor(){
    }
    //Course Table 
    async getAllCourses(){
        try{
            const [courses] = await connectionPool.execute(`SELECT * FROM Course`);

            if(courses.length > 0)
                return courses;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    async getCourseById(idCourse){
        try{
            const [result] = await connectionPool.execute('SELECT idCourse, idInstitution, name, field, description, degree, tuitionFee FROM Course WHERE idCourse = ?', [idCourse]);
            
            if(result.length > 0)
                return result[0];
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    async getCourseByName(name){
        try{
            const [result] = await connectionPool.execute('SELECT idCourse, idInstitution, name, field, description, degree, tuitionFee FROM Course WHERE name = ?',[name]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO"); 

        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    async getCourseByFreeFee(){
        try{
            const [result] = await connectionPool.execute('SELECT idCourse, idInstitution, name, field, description, degree, tuitionFee FROM Course WHERE tuitionFee = ?', [true]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }  
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    async getCourseByPayedFee(){
        try{
            const [result] = await connectionPool.execute('SELECT idCourse, idInstitution, name, field, description, degree, tuitionFee FROM Course WHERE tuitionFee = ?', [false]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");
            
        }  
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    async getCourseByField(field){
        try{
            const [result] = await connectionPool.execute('SELECT idCourse, idInstitution, name, field, description, degree, tuitionFee FROM Course WHERE field = ?', [field]);

            if(result.length > 0)
                return result;
            
            else
                throw new SQLError("Error at CourseDAO");
  
        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    async getCourseByDegree(degree){
        try{
            const [result] = await connectionPool.execute(`SELECT idCourse, idInstitution, name, field, description, degree, tuitionFee FROM Course WHERE degree=?`, [degree]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    async getCourseByInstitutionId(idInstitution){
        try{
            const [result] = await connectionPool.execute(`SELECT idCourse, idInstitution, name, field, description, degree, tuitionFee FROM Course WHERE idInstitution=?`, [idInstitution]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }
    
    //RegisterRequirement Table
    async getRegisterRequirementById(idCourse){
        try{
            const [result] = await connectionPool.execute(
                `SELECT educationLevel, ageRange, gender, firstJob, freeCourse FROM RegisterRequirement WHERE idCourse=?`, 
                [idCourse]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    //Deadline table
    async getDeadlineById(idCourse){
        try{
            const [result] = await connectionPool.execute(
                `SELECT fromDate, toDate FROM Deadline WHERE idCourse=?`, 
                [idCourse]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");
            
        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }

    async verifyCourse(idCourse){
        try{
            const [result] = await connectionPool.execute(
                `SELECT 1 FROM Course WHERE idCourse=?`, 
                [idCourse]);

            if(result.length > 0)
                return true;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return false;
        }
    }
}