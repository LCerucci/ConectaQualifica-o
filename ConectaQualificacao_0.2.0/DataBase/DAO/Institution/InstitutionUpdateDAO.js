import { ErrorHandling } from "../../../Error/ErrorHandling.js";
import { connectionPool } from "../../DBConnection.js";

export class InstitutionUpdateDAO{
    constructor(){
    }
    
    async updateInstitutionById(idInstitution, name, educationLevel, contact, email, address, link){
        try{
            const [result] = await connectionPool.execute(
                `UPDATE Institution SET name=?, educationLevel=?, contact=?, email=?, address=?, link=? WHERE idInstitution=?`, 
                [name, educationLevel, contact, email, address, link, idInstitution]);

            if(result.affectedRows > 0)
                console.log('Object(Institution) updated successfully!');
            else
                throw new SQLError("Error at CourseDAO");
        }
        catch(err){
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }
}