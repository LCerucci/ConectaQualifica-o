import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { InstitutionDeleteDAO } from "../../DataBase/DAO/Institution/InstitutionDeleteDAO.js";

const Delete = new InstitutionDeleteDAO();

export class InstDeleteService{
    constructor(){
    }

    async deleteInstitution(idInstitution) {
        try {
            const result = await Delete.deleteInstitutionById(idInstitution);

            if(result)
                return true;
            else
                return false;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
            return null;
        }
    }
}