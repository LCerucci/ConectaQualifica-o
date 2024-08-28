import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { CourseUpdateDAO } from "../../DataBase/DAO/Course/CourseUpdateDAO.js";
import { Course } from "../../Model/Course.js"
import { CourseGetDAO } from "../../DataBase/DAO/Course/CourseGetDAO.js";

const Get = new CourseGetDAO();
const Update = new CourseUpdateDAO();

export class CourseUpdateService {
    constructor() {
    }
    async updateCourseById(idCourse, newValues = {}) {
        try {

            let promises = [Get.getCourseById(idCourse)]
            const courseInfo = await Promise.all(promises);

            const { idInstitution, name, field, description, degree, tuitionFee } = courseInfo[0];
            const course = new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee);

            if (newValues["name"] !== null && newValues["name"] !== undefined)
                course.setName(newValues["name"]);

            if (newValues["field"] !== null && newValues["field"] !== undefined)
                course.setField(newValues["field"]);

            if (newValues["description"] !== null && newValues["description"] !== undefined)
                course.setDescription(newValues["description"]);

            if (newValues["degree"] !== null && newValues["degree"] !== undefined)
                course.setDegree(newValues["degree"])

            if (newValues["tuitionFee"] !== null && newValues["tuitionFee"] !== undefined)
                course.setTuitionFee(newValues["tuitionFee"]);

            const result = await Update.updateCourseById(idCourse, course.getName(), course.getField(), course.getDescription(), course.getDegree(), course.getTuitionFee());

            if (result !== null)
                return course.returnCourseJson();
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async updateDeadline(idCourse, newValues = {}) {
        try {
            const requirementInfo = await Get.getDeadlineById(idCourse);
            let { fromDate, toDate } = requirementInfo[0];

            if (newValues["fromDate"] !== null && newValues["fromDate"] !== undefined)
                fromDate = newValues["fromDate"];

            if (newValues["toDate"] !== null && newValues["toDate"] !== undefined)
                toDate = newValues["toDate"];

            const result = await Update.updateRegisterDeadlineById(idCourse, { fromDate, toDate });

            if (result !== null)
                return { fromDate, toDate };
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async updateRegisterRequirement(idCourse, newValues = {}) {
        try {
            const requirementInfo = await Get.getRegisterRequirementById(idCourse);

            if (!requirementInfo) {
                console.log(`Register requirement for course with id ${idCourse} not found.`);
                return false;
            }

            let { educationLevel, ageRange, gender, firstJob, freeCourse } = requirementInfo;

            if (newValues["educationLevel"] !== undefined)
                educationLevel = newValues["educationLevel"];

            if (newValues["ageRange"] !== undefined)
                ageRange = newValues["ageRange"];

            if (newValues["gender"] !== undefined)
                gender = newValues["gender"];

            if (newValues["firstJob"] !== undefined)
                firstJob = newValues["firstJob"];

            if (newValues["freeCourse"] !== undefined)
                freeCourse = newValues["freeCourse"];

            const result = await Update.updateRegisterRequirementById(idCourse, { educationLevel, ageRange, gender, firstJob, freeCourse });

            return result !== null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
            return false;
        }
    }
}