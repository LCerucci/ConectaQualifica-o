import { CourseCreateDAO } from "../../DataBase/DAO/Course/CourseCreateDAO.js";
import { CourseGetDAO } from "../../DataBase/DAO/Course/CourseGetDAO.js";
import { InstitutionGetDAO } from "../../DataBase/DAO/Institution/InstitutionGetDAO.js";
import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { Course } from "../../Model/Course.js";

const Create = new CourseCreateDAO();
const Get = new CourseGetDAO();
const InstGet = new InstitutionGetDAO();

export class CourseCreateService{
    constructor(){
    }

    async createNewCourse(idInstitution, name, field, description, degree, tuitionFee) {
        try {
            if (await InstGet.verifyInstitution(idInstitution)) {
                const course = new Course(null, idInstitution, name, field, description, degree, tuitionFee);
                const result = await Create.createCourse(course.getidInstitution(), course.getName(), course.getField(), course.getDescription(), course.getDegree(), course.getTuitionFee());

                if (result !== null)
                    return course.returnCourseJson();
                else
                    return null;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async createNewRegisterRequirement(idCourse, registerRequirement) {
        try {
            let promises = [];

            const { educationLevel, ageRange, gender, firstJob, freeCourse } = registerRequirement;
            const {idInstitution, name, field, description, degree, tuitionFee} = promises.push(Get.getCourseById(idCourse));

            const course = new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee, {}, { educationLevel, ageRange, gender, firstJob, freeCourse });
            promises.push(Create.createRegisterRequirement(course.getId(), course.getRegisterRequirement()));
            
            const result = await Promise.all(promises);

            if (result.every( promise => promise !== null))
                return course.getRegisterRequirement();
            else
                return null;
        }
        catch (err) {
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    async createDeadline(idCourse, deadline) {
        try {
            let promises = [];

            const { fromDate, toDate } = deadline;
            const { name, field, description, degree, tuitionFee } = promises.push(Get.getCourseById(idCourse));

            const course = new Course(idCourse, null, name, field, description, degree, tuitionFee, {fromDate, toDate}, {});
            promises.push(Create.createRegisterdDeadline(course.getId(), course.getRegisterDeadline()));

            const result = await Promise.all(promises);

            if (result.every(promises => promises !== null))
                return course.getRegisterDeadline();
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }
}