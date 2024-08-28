import { InstUpdateService } from "../../Services/Institution/InstUpdateService.js"

const instPuts = new InstUpdateService();

export class InstPutController{
    constructor(){
    }

    async updateInstitution(req, res, next) {
        try {
            const idInstitution = Number(req.params.id);
            const { name, educationLevel, contact, email, address, link } = req.body;
            const institution = await instPuts.updateInstitution(
                idInstitution, name, educationLevel, contact, email, address, link);

            if (institution !== null)
                res.status(200).json({ message: `Instituição atualizada com sucesso!`, institution: institution });
            else
                res.status(404).json({ message: `Algo deu errado, verifique os campos e tente novamente.` });
        }
        catch (err) {
            next(err);
        }
    }
}