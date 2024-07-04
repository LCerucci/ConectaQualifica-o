import { InstCreateService } from "../../Services/Institution/InstCreateService.js";

const instCreate = new InstCreateService();

export class InstPostController{
    constructor(){
    }

    async createNewInstitution(req, res, next) {
        try {
            const { name, educationLevel, contact, email, address, link } = req.body;
            const institution = await instCreate.createNewInstitution(name, educationLevel, contact, email, address, link);

            if (institution !== null)
                res.status(201).json({ message: `Instituição criada com sucesso!`, institution: institution });
            else
                res.status(400).json({ message: `Algo deu errado, verifique os campos e tente novamente.` });
        }
        catch (err) {
            next(err);
        }
    }
}