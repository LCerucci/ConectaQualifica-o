import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { CourseGetDAO } from "../../DataBase/DAO/Course/CourseGetDAO.js"
import { Course } from "../../Model/Course.js"

const Get = new CourseGetDAO();


export class CourseGetService {
    constructor() {
    }
    //Get service
    async getAllCourse() {
        try {
            let courses = [];
            const infoCourses = await Get.getAllCourses();

            if (infoCourses !== null) {
                for (let element of infoCourses) {
                    let { idCourse, idInstitution, name, field, description, degree, tuitionFee } = element;
                    let course = (new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee));
                    courses.push(course.returnCourseJson());
                }
                return courses;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async getCourseById(idCourse) {
        try {
            let promises = [
                Get.getCourseById(idCourse),
                Get.getRegisterRequirementById(idCourse),
                Get.getDeadlineById(idCourse)
            ];

            const [courseInfo, registerRequirement, deadline] = await Promise.all(promises);

            if (courseInfo !== null) {
                const { idCourse, idInstitution, name, field, description, degree, tuitionFee } = courseInfo;
                const course = new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee);

                if(registerRequirement !== null){
                    console.log(registerRequirement);
                    course.setRequirement(registerRequirement[0]);
                }

                if(deadline !== null ){
                    console.log(deadline);
                    course.setDeadline(deadline[0]);
                }

                return course.returnCourseJson();
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async searchCourseByName(name) {
        try {
            let courses = [];
            const infoCourses = await Get.getCourseByName(name);

            if (infoCourses !== null) {
                for (let element of infoCourses) {
                    let { idCourse, idInstitution, name, field, description, degree, tuitionFee } = element;
                    let course = (new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee));
                    courses.push(course.returnCourseJson());
                }
                return courses;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async searchCourseByFreeFee() {
        try {
            let courses = [];

            const infoCourses = await Get.getCourseByFreeFee();

            if (infoCourses !== null) {
                for (let element of infoCourses) {
                    let { idCourse, idInstitution, name, field, description, degree, tuitionFee } = element;
                    let course = new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee);
                    courses.push(course.returnCourseJson());
                }
                return courses;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async searchCourseByField(field) {
        try {
            let courses = [];
            let infoCourses = await Get.getCourseByField(field);

            if (infoCourses !== null) {
                for (let element of infoCourses) {
                    let { idCourse, idInstitution, name, field, description, degree, tuitionFee } = element;
                    let course = new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee);
                    courses.push(course.returnCourseJson());
                }
                return courses;
            }
            else {
                return null;
            }

        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async searchCourseByDegree(degree) {
        try {
            let courses = [];
            let infoCourses = await Get.getCourseByDegree(degree);

            if (infoCourses !== null) {
                for (let element of infoCourses) {
                    let { idCourse, name, field, description, degree, tuitionFee } = element;
                    let course = new Course(idCourse, name, field, description, degree, tuitionFee);
                    courses.push(course.returnCourseJson());
                }
                return courses;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }

    async searchCourseByInstitution(idInstitution) {
        try {
            let courses = [];
            let infoCourses = await Get.getCourseByInstitutionId(idInstitution);

            if (infoCourses !== null) {
                for (let element of infoCourses) {
                    let { idCourse, idInstitution, name, field, description, degree, tuitionFee } = element;
                    let course = new Course(idCourse, idInstitution, name, field, description, degree, tuitionFee);
                    courses.push(course.returnCourseJson());
                }
                return courses;
            }
            else
                return null;
        }
        catch (err) {
            ErrorHandling.simplifyError(err);
        }
    }
}