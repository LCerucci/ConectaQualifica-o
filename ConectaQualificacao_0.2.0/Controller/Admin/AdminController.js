import { AdminService } from "../../Services/Admin/AdminService.js";

const service = new AdminService();

export class AdminController {
    constructor() {
    }

    async login(req, res, next) {
        try {
            const {userName, password} = req.body;
            const userInfo = await service.getAdminInfo(userName, password);

            if(userInfo !== null){
                res.cookie('token', userInfo.token, {maxAge:3600000, httpOnly: true, secure: true, sameSite: 'Strict', path:'/'});
                res.status(200).json({message: "Bem vindo!"});
            }
            else
                res.status(403).json({message: "Falha ao logar, verifique suas credenciais e tente novamente"});
        } 
        catch (err) {
          next(err);
        }
    }

    async logout(_req, res, next){
        try{
            res.clearCookie('token', {httpOnly: true, secure: true, sameSite: 'Strict'});
            res.status(200).json("Sessão encerrada!");
        }
        catch(err){
            next(err);
        }
    }
}