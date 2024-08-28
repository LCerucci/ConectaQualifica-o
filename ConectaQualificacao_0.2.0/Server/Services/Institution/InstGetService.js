import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { CourseGetDAO } from "../../DataBase/DAO/Course/CourseGetDAO.js"
import { InstitutionGetDAO } from "../../DataBase/DAO/Institution/InstitutionGetDAO.js";
import { Institution } from "../../Model/Institution.js";
import { Course } from "../../Model/Course.js";

const Get = new InstitutionGetDAO();
const GetCourse = new CourseGetDAO();

export class InstGetService{
    constructor(){
    }

    async getAllInstitution() {
        try {
            let institutions = [];
            let institutionInfo = await Get.getAllInstitution();
            console.log(institutionInfo);

            if (institutionInfo !== null) {
                for (let element of institutionInfo) {
                    let { idInstitution, name, educationLevel, contact, email, address, link } = element;
                    let institution = new Institution(idInstitution, name, educationLevel, contact, email, address, link);
                    institutions.push(institution.returnInstitutionJson());
                }
                return institutions;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
            return null;
        }
    }

    async getInstitutionById(idInstitution) {
        try {
            const institutionInfo = await Get.getInstitutionById(idInstitution);
            const courseInfo = await GetCourse.getCourseByInstitutionId(idInstitution);

            const { id, name, educationLevel, contact, email, address, link } = institutionInfo;
            const institution = new Institution(id, name, educationLevel, contact, email, address, link);

            for (let element of courseInfo) {
                const { idCourse, idInstitution, name, field, description, degree, tuitionFee } = element;
                const course = new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee);
                institution.addCourse(course);
            }

            if (institution !== null) {
                return institution.returnInstitutionJson();
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
            return null;
        }
    }

    async searchInstitutionByName(name) {
        try {
            const institutionInfo = await Get.getInstitutionByName(name);
            let institutions = [];

            if (institutionInfo !== null) {
                for (let element of institutionInfo) {
                    const { id, instName, educationLevel, contact, email, address, link } = element;
                    const institution = new Institution(id, instName, educationLevel, contact, email, address, link);
                    institutions.push(institution.returnInstitutionJson());
                }
                return institutions;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
            return null;
        }
    }

    async searchInstitutionByEducationLevel(educationLevel) {
        try {
            const institutionInfo = await Get.getInstitutionByEducationLevel(educationLevel);
            let institutions = [];

            if (institutionInfo !== null) {
                for (let element of institutionInfo) {
                    const { id, name, educationLevel, contact, email, address, link } = element;
                    const institution = new Institution(id, name, educationLevel, contact, email, address, link);
                    institutions.push(institution.returnInstitutionJson());
                }
                return institutions;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
            return null;
        }
    }
}