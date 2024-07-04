import { CourseGetService } from "../../Services/Course/CourseGetService.js";

const getServ = new CourseGetService();

export class CourseGetController {
    constructor() {
    }

    async getAllCourses(_req, res, next) {
        try {
            const courses = await getServ.getAllCourse();

            if (courses !== null)
                res.status(200).json({ message: 'Cursos encontrados!', courses: courses });
            else
                res.status(404).json({ message: 'Nenhum curso encontrado.' });
        }
        catch (err) {
            next(err);
        }
    }

    async getCourseById(req, res, next) {
        try {
            const idCourse = Number(req.params.id);
            const course = await getServ.getCourseById(idCourse);

            if (course !== null) {
                res.status(200).json({ message: `Curso encontrado!`, course: course });
            }
            else
                res.status(404).json({ message: `Curso não encontrado.` });
        }
        catch (err) {
            next(err);
        }
    }

    async searchCourseByName(req, res, next) {
        try {
            const { name } = req.params;
            const courses = await getServ.searchCourseByName(name);

            if (courses !== null)
                res.status(200).json({ message: 'Cursos encontrados!', courses: courses });
            else
                res.status(404).json({ message: 'Nenhum curso encontrado.' });
        }
        catch (err) {
            next(err);
        }
    }

    async searchCourseByFee(req, res, next) {
        try {
            let fee = req.params.fee.toLowerCase();
            let courses = [];
            fee === "gratuito" ? fee = true : fee = false;

            if (fee)
                courses.push(await getServ.searchCourseByFreeFee());

            if (!courses.includes(null))
                res.status(200).json({ message: 'Cursos encontrados!', courses: courses });
            else
                res.status(404).json({ message: 'Nenhum curso encontrado.' })
        }
        catch (err) {
            next(err);
        }
    }

    async SearchCourseByField(req, res, next) {
        try {
            const field = req.params.field.toLowerCase();
            const courses = await getServ.searchCourseByField(field);

            if (courses !== null)
                res.status(200).json({ message: 'Cursos encontrados!', courses: courses });
            else
                res.status(404).json({ message: 'Nenhum curso encontrado!' });
        }
        catch (err) {
            next(err);
        }
    }

    async searchCourseByDegree(req, res, next) {
        try {
            const degree = req.params.degree.toLowerCase();
            const courses = await getServ.searchCourseByDegree(degree);

            if (courses !== null)
                res.status(200).json({ message: 'Cursos encontrados com sucesso!', courses: courses });
            else
                res.status(404).json({ message: 'Nenhum curso encontrado!' });
        }
        catch (err) {
            next(err);
        }
    }

    async searchCourseByInstitution(req, res, next) {
        try {
            const idInstitution = Number(req.params.id);
            const courses = await getServ.searchCourseByInstitution(idInstitution);

            if (courses !== null)
                res.status(200).json({ message: 'Cursos encontrados!', courses: courses });
            else
                res.status(404).json({ message: 'Nenhum curso encontrado!' });
        }
        catch (err) {
            next(err);
        }
    }
}