import { ErrorHandling } from "../../../Error/ErrorHandling.js";
import { connectionPool } from "../../DBConnection.js";

export class InstitutionGetDAO{

    constructor(){
    }
    
    async getAllInstitution(){
        try{
            const [result] = await connectionPool.execute(`SELECT * FROM Institution`);

            if(result.length > 0 )
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    async getInstitutionById(idInstitution){
        try{
            const [result] = await connectionPool.execute(
                `SELECT idInstitution, name, educationLevel, contact, email, address, link FROM Institution WHERE idInstitution=?`, 
                [idInstitution]);

            if(result.length > 0)
                return result[0];
            else
                throw new SQLError("Error at CourseDAO");
            
        }
        catch(err){
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    async getInstitutionByName(name){
        try{
            const [result] = await connectionPool.execute(
                `SELECT idInstitution, name, educationLevel, contact, email, address, link FROM Institution WHERE name=?`, 
                [name]);
        
            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch(err){
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    async getInstitutionByEducationLevel(educationLevel){
        try{
            const [result] = await connectionPool.execute(
                `SELECT idInstitution, name, educationLevel, contact, email, address, link FROM Institution WHERE educationLevel=?`, 
                [educationLevel]);

            if(result.length > 0)
                return result;
            else
                throw new SQLError("Error at CourseDAO");
            
        }
        catch(err){
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    async verifyInstitution(idInstitution){
        try{
            const [result] = await connectionPool.execute(
                `SELECT 1 FROM Institution WHERE idInstitution=?`, 
                [idInstitution]);

            if(result.length > 0)
                return true;
            else
                throw new SQLError("Error at CourseDAO");
        }
        catch(err){
            ErrorHandling.simplifyError(err);
            return false;
        }
    }
}