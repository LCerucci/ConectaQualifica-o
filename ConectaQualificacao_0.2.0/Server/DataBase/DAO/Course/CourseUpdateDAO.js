import { connectionPool } from "../../DBConnection.js";
import { ErrorHandling } from "../../../Error/ErrorHandling.js"

export class CourseUpdateDAO{

    //Constructor to avoid static use.
    constructor(){
    }
    //Course table
    async updateCourseById(idCourse, name=undefined, field=undefined, description=undefined, degree=undefined, tuitionFee=undefined){
        try{
            let promise = [];

            if(name !== undefined)
                promise.push(connectionPool.execute(`UPDATE Course SET name=? WHERE idCourse=?`, [name, idCourse]));   
            
            if(field !== undefined)
                promise.push(connectionPool.execute(`UPDATE Course SET field=? WHERE idCourse=?`, [field, idCourse]));
            
            if(description !== undefined)
                promise.push(connectionPool.execute(`UPDATE Course SET description=? WHERE idCourse=?`, [description, idCourse]));
           
            if(degree !== undefined)
                promise.push(connectionPool.execute(`UPDATE Course SET degree=? WHERE idCourse=?`, [degree, idCourse]));
            
            if(tuitionFee !== undefined)
                promise.push(connectionPool.execute(`UPDATE Course SET tuitionFee=? WHERE idCourse=?`, [tuitionFee, idCourse]));
            
            const result = await Promise.all(promise);
            return result;

        }catch(err){
            ErrorHandling.simplifyError(err);
            return null;
        }
    }

    //RegisterRequirement table
    async updateRegisterRequirementById(idCourse, registerRequirement = {educationLevel: undefined, ageRange: undefined, gender: undefined, firstJob: undefined, freeCourse: undefined}) {
        try {
            let promise = [];
    
            if (registerRequirement['educationLevel'] !== undefined)
                promise.push(connectionPool.execute(`UPDATE RegisterRequirement SET educationLevel=? WHERE idCourse=?`, [registerRequirement['educationLevel'], idCourse]));
    
            if (registerRequirement['ageRange'] !== undefined)
                promise.push(connectionPool.execute(`UPDATE RegisterRequirement SET ageRange=? WHERE idCourse=?`, [registerRequirement['ageRange'], idCourse]));
    
            if (registerRequirement['gender'] !== undefined)
                promise.push(connectionPool.execute(`UPDATE RegisterRequirement SET gender=? WHERE idCourse=?`, [registerRequirement['gender'], idCourse]));
    
            if (registerRequirement['firstJob'] !== undefined)
                promise.push(connectionPool.execute(`UPDATE RegisterRequirement SET firstJob=? WHERE idCourse=?`, [registerRequirement['firstJob'], idCourse]));
    
            if (registerRequirement['freeCourse'] !== undefined)
                promise.push(connectionPool.execute(`UPDATE RegisterRequirement SET freeCourse=? WHERE idCourse=?`, [registerRequirement['freeCourse'], idCourse]));
        
            const result = await Promise.all(promise);
            return result;
        }
        catch(err) {
            ErrorHandling.simplifyError(err);
            return null;
        }
    }
    

    //RegisterDeadline table
    async updateRegisterDeadlineById(idCourse, registerDeadline={fromDate: undefined, toDate: undefined}){
        try{
            let promise = [];
        
            if(registerDeadline['fromDate'] !== undefined)
                promise.push(connectionPool.execute(`UPDATE Deadline SET fromDate=? WHERE idCourse=?`, [registerDeadline['fromDate'], idCourse]));
           
            if(registerDeadline['toDate'] !== undefined)
                promise.push(connectionPool.execute(`UPDATE Deadline SET toDate=? WHERE idCourse=?`, [registerDeadline['toDate'], idCourse]));
            
            const result = await Promise.all(promise);
            return result;
        }
        catch(err){
            ErrorHandling.simplifyError(err);
            return null;
        }
    }
}