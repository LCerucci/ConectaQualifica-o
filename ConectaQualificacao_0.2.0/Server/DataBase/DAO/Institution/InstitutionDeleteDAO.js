import { ErrorHandling } from '../../../Error/ErrorHandling.js';
import { connectionPool } from '../../DBConnection.js';
import { InstitutionGetDAO } from './InstitutionGetDAO.js';

const Get = new InstitutionGetDAO();

export class InstitutionDeleteDAO {

    constructor() {
    }

    async deleteInstitutionById(idInstitution) {
        try {
            if(await Get.verifyInstitution(idInstitution)){
                const [result] = await connectionPool.execute(
                    `DELETE FROM Institution WHERE idInstitution=?`, 
                    [idInstitution]);

                if(result.affectedRows > 0)
                    return true;
                else
                    throw new SQLError("Error at CourseDAO");

            }
            else
                return false;
        }    
        catch (err) {
            ErrorHandling.ErrorHandling(err);
            return false;
        }
    }
}