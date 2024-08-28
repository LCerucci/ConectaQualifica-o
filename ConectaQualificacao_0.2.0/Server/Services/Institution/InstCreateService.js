import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { InstitutionCreateDAO } from "../../DataBase/DAO/Institution/InstitutionCreateDAO.js"
import { Institution } from "../../Model/Institution.js"

const Create = new InstitutionCreateDAO();

export class InstCreateService{
    constructor(){
    }

    async createNewInstitution(name, educationLevel, contact, email, address, link) {
        try {
            const institution = new Institution(null, name, educationLevel, contact, email, address, link);
            const result = await Create.createInstitution(institution.getName(), institution.getEducationLevel(), institution.getContact(), institution.getEmail(), institution.getAddress(), institution.getLink());
            
            if (result !== null)
                return institution.returnInstitutionJson();
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
            return null;
        }
    }
}