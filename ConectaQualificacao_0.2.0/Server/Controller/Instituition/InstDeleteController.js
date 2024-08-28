import { InstDeleteService } from "../../Services/Institution/InstDeleteService.js"

const instDelete = new InstDeleteService();

export class InstDeleteController{
    constructor(){
    }

    async deleteInstitution(req, res, next) {
        try {
            const idInstitution = Number(req.params.id);
            const result = await instDelete.deleteInstitution(idInstitution);

            if (result)
                res.status(204).send();
            else
                res.status(404).json({ message: `Algo deu errado, verifique os campos e tente novamente.` });
        }
        catch (err) {
            next(err);
        }
    }
}