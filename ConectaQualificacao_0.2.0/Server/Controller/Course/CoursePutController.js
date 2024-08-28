import { CourseUpdateService } from "../../Services/Course/CourseUpdateService.js";

const putService = new CourseUpdateService();

export class CoursePutController{
    constructor(){
    }

    async updateCourse(req, res, next) { 
        try {
            const idCourse = Number(req.params.id);
            const { name, field, description, degree, tuitionFee} = req.body;

            const course = await putService.updateCourseById(idCourse, {name, field, description, degree, tuitionFee});

            if (course !== null)
                res.status(201).json({message: `Curso atualizado com sucesso!`, course: course});
            else
                res.status(400).json({ message: `Falha ao atualizar dados, verifique os campos e tente novamente.` });
        }
        catch (err) {
            next(err);
        }
    }

    async updateDeadline(req, res, next){
        try{
            const idCourse = Number(req.params.id);
            const {fromDate, toDate} = req.body;
            const deadline = await putService.updateDeadline(idCourse, {fromDate, toDate});
            
            if (deadline !== null)
                res.status(201).json({message: `Prazo de inscrição atualizado com sucesso.`, deadline: deadline})
            else
                res.status(400).json({ message: `Falha ao atualizar dados, verifique os campos e tente novamente.` });
        }
        catch(err){
            next(err);
        }
    }

    async updateRegisterRequirement(req, res, next){
        try{
            const idCourse = Number(req.params.id);
            const {educationLevel, ageRange, gender, firstJob, freeCourse} = req.body;

            const requirement = await putService.updateRegisterRequirement(
                idCourse, {educationLevel, ageRange, gender, firstJob, freeCourse});

            if (requirement)
                res.status(201).json({ message: `COndições de inscrição atualizadas com sucesso!`});
            else
                res.status(400).json({ message: `Falha ao atualizar dados, verifique os campos e tente novamente.` });
        }
        catch(err){
            next(err);
        }
    }
}