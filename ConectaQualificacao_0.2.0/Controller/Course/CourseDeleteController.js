import { CourseDeleteService } from "../../Services/Course/CourseDeleteService.js";

const deleteService = new CourseDeleteService();

export class CourseDeleteController{
    constructor(){
    }

    async deleteCourse(req, res){
        try{
            const idCourse = Number(req.params.id);
            const result = await deleteService.deleteCourse(idCourse);

            if(result !== null)
                res.status(204);
            else
                res.status(400).json({message: "Falha ao deletar curso."});
        }
        catch(err){
            next(err);
        }
    }
}