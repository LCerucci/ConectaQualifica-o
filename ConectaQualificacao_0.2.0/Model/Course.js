export class Course {
    constructor(id = null, idInstitution = null, name = null, field = null, description = null, degree = null, tuitionFee = null, registerDeadline = {}, registerRequirement = {}) {
        this.name = name;
        this.description = description;
        this.field = field;
        this.degree = degree;
        this.tuitionFee = Number(tuitionFee);

        this.idInstitution = idInstitution;
        this.id = id;

        this.registerDeadline = {
            fromDate: registerDeadline.fromDate || '',
            toDate: registerDeadline.toDate || ''
        };

        this.registerRequirement = {
            educationLevel: registerRequirement.educationLevel || '',
            ageRange: registerRequirement.ageRange || '',
            gender: registerRequirement.gender || '',
            firstJob: registerRequirement.firstJob || '',
            freeCourse: registerRequirement.freeCourse || '',
        };
    }

    getId() {
        return this.id;
    }

    getidInstitution() {
        return this.idInstitution;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getDescription() {
        return this.description;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    getField() {
        return this.field;
    }

    setField(field) {
        this.field = field;
    }

    getDegree() {
        return this.degree;
    }

    setDegree(degree) {
        this.degree = degree;
    }

    getTuitionFee() {
        return this.tuitionFee;
    }

    setTuitionFee(tuitionFee) {
        this.tuitionFee = tuitionFee;
    }

    getRegisterDeadline() {
        return this.registerDeadline;
    }

    setDeadline({ fromDate, toDate }) {
        this.registerDeadline = {
            fromDate: fromDate || '',
            toDate: toDate || ''
        };
    }

    getRegisterRequirement() {
        return this.registerRequirement;
    }

    setRequirement({ educationLevel, ageRange, gender, firstJob, freeCourse }) {
        this.registerRequirement = {
            educationLevel: educationLevel || '',
            ageRange: ageRange || '',
            gender: gender || '',
            firstJob: firstJob || '',
            freeCourse: freeCourse || ''
        };
    }

    returnCourseJson() {
        return {
            idCourse: this.id,
            idInstitution: this.idInstitution,
            name: this.name,
            description: this.description,
            field: this.field,
            degree: this.degree,
            tuitionFee: this.tuitionFee,
            registerRequirement: this.registerRequirement,
            deadline: this.registerDeadline
        };
    }
}