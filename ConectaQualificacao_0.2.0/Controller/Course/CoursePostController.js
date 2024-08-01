import { CourseCreateService } from "../../Services/Course/CourseCreateService.js";

const createService = new CourseCreateService;

export class CoursePostConstroller{
    constructor(){
    }   

    async createNewCourse(req, res, next) {
        try {
            const idInstitution = Number(req.params.id);
            const {name, description, field, degree, tuitionFee } = req.body;
            const course = await createService.createNewCourse(idInstitution, name, field, description, degree, tuitionFee);

            if (course !== null)
                res.status(201).json({ message: `Curso criado com sucesso.`, course: course});
            else
                res.status(400).json({ message: `Falha ao criar o curso, verifique os campos e tente novamente.` });
        }
        catch (err) {
            next(err);
        }
    }

    async createNewRegisterRequirement(req, res, next) {
        try {
            const idCourse = Number(req.params.id);
            const registerRequirement = { 
                  educationLevel : req.body.educationLevel, 
                  ageRange: req.body.ageRange, 
                  gender: req.body.gender, 
                  firstJob: req.body. firstJob,
                  freeCourse: req.body.freeCourse,
                };
            
            const result = await createService.createNewRegisterRequirement(idCourse, registerRequirement);

            if (result !== null)
                res.status(201).json({ message: `Requisito criado com sucesso.`, requirement: result});
            else
                res.status(400).json({ message: `Falha ao criar o curso, verifique os campos e tente novamente.` });
        }
        catch (err) {
            next(err);
        }
    }

    async createNewDeadline(req, res, next) {
        try {
            const idCourse = Number(req.params.id);
            const deadline = { fromDate: req.body.fromDate, toDate: req.body.toDate };

            const result = await createService.createDeadline(idCourse, deadline);

            if (result !== null)
                res.status(201).json({ message: `Prazo de inscrição criado com sucesso.`, deadline: result});
            else
                res.status(400).json({ message: `Falha ao criar o curso, verifique os campos e tente novamente.` });
        }
        catch (err) {
            next(err);
        }
    }
}