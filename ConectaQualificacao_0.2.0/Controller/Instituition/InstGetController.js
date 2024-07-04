import { InstGetService } from "../../Services/Institution/InstGetService.js";

const instService = new InstGetService();

export class InstGetController{
    constructor(){
    }

    async getAllInstitution(_req, res, next) {
        try {
            const institutions = await instService.getAllInstitution();

            if (institutions !== null)
                res.status(200).json({ message: 'Instituições encontradas.', institutions: institutions });
            else
                res.status(404).json({ message: 'Nenhuma instituição encontrada.' });
        }
        catch (err) {
            next(err);
        }
    }

    async getInstitutionById(req, res, next) {
        try {
            const id = Number(req.params.id);
            const institution = await instService.getInstitutionById(id);

            if (institution !== null)
                res.status(200).json({ message: `Instituição encontrada!`, institution: institution });
            else
                res.status(404).json({ message: `Instituição não encontrada.` });
        }
        catch (err) {
            next(err);
        }
    }

    async SearchInstitutionByName(req, res, next) {
        try {
            const name = req.params.name;
            const institutions = await instService.searchInstitutionByName(name);

            if (institutions !== null)
                res.status(200).json({ message: `Instituições encontradas.`, institutions: institutions });
            else
                res.status(404).json({ message: `Instituição não encontrada.` });

        }
        catch (err) {
           next(err);
        }
    }

    async searchInstitutionByEducationLevel(req, res, next) {
        try {
            const educationLvl = req.params.educationLevel
            const institutions = await instService.searchInstitutionByEducationLevel(educationLvl);

            if (institutions !== null)
                res.status(200).json({ message: `Instituições encontradas.`, institutions: institutions });
            else
                res.status(404).json({ message: `Instituição não encontrada.` });
        }
        catch (err) {
            next(err);
        }
    }
}