import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { InstitutionGetDAO } from "../../DataBase/DAO/Institution/InstitutionGetDAO.js";
import { InstitutionUpdateDAO } from "../../DataBase/DAO/Institution/InstitutionUpdateDAO.js";
import { Institution } from "../../Model/Institution.js";


const Get = new InstitutionGetDAO();
const Update = new InstitutionUpdateDAO();

export class InstUpdateService{
    constructor(){
    }

    async updateInstitution(id, pName, pEducationLevel, pContact, pEmail, pAddress, pLink) {
        try {
            let promise = [];
            const institutionInfo = await Get.getInstitutionById(id);

            if(institutionInfo === null)
                return null;

            const {idInstitution, name, educationLevel, contact, email, address, link } = institutionInfo;

            const institution = new Institution(idInstitution, name, educationLevel, contact, email, address, link );

            if (name !== pName)
                institution.setName(pName) 
                
            if(educationLevel !== pEducationLevel)  
                institution.setEducationLevel(pEducationLevel);

            if(contact !== pContact) 
                institution.setContact(pContact);

            if(email !== pEmail)
                institution.setEmail(pEmail);

            if(address !== pAddress)
                institution.setAddress(pAddress);

            if(link !== pLink) 
                institution.setLink(pLink)

            promise.push(Update.updateInstitutionById(institution.getId(), institution.getName(), institution.getEducationLevel(), institution.getContact(), institution.getEmail(), institution.getAddress(), institution.getLink()));

            const result = await Promise.all(promise);

            if (result.every(result => result !== null))
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